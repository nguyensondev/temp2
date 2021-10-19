// import React, { FC, useCallback, useEffect, useRef, useState } from "react"
// import {
//   View,
//   SafeAreaView,
//   Image,
//   Dimensions,
//   Animated,
//   StyleSheet,
//   Alert,
//   StatusBar,
//   Platform,
// } from "react-native"
// import Carousel, { ParallaxImage } from "react-native-snap-carousel"
// import { Video } from "expo-av"

// import Text from "@components/text/text"
// import Avatar from "@components/common/avatar/Avatar"
// import IconButton from "@components/common/button/primaryButtons/IconButton"
// import RoundedButton from "@components/common/button/roundedButtons/RoundedButton"
// import CircleButton from "@components/common/button/secondaryButtons/CircleButton"
// import AvatarProfile from "@components/complex/AvatarProfile/AvatarProfile"
// import UpVoteReply from "@components/complex/UpVoteReply"
// import CameraIcon from "@components/icon/Camera"
// import LikeIcon from "@components/icon/Like"
// import BackgroundScreen from "@components/screen/backgroundScreen/BackgroundScreen"
// import { useStores } from "@models/root-store"
// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
// import { HEIGHTBAR, SCREEN_WIDTH } from "@config/constants"

// import colors from "@theme/color"

// import styles from "./styles"
// import ProjectImageItem, { RefItemProjectObject } from "./ProjectImageItem"
// import ProjectVideos, { RefItemVideoProjectObject } from "./ProjectVideos"
// import StoryDetail, { RefModalObject } from "./story/StoryDetail"
// import firestore from "@react-native-firebase/firestore"

// const videos = [
//   {
//     url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     poster: "https://est-dev.imgix.net/uploads/projects//a70e6076-8494-4c7c-876d-5574a75be298.jpeg",
//   },
//   {
//     url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     poster: "https://est-dev.imgix.net/uploads/projects/3666fe0e-eac8-4e9d-b4ef-bd9f72b6fa10.jpeg",
//   },
//   {
//     url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
//     poster: "https://est-dev.imgix.net/uploads/projects/e89a7dad-a071-4a96-8e92-4fe6e93a1171.jpeg",
//   },
// ]

// const HomeScreen: FC = () => {
//   const { authStore, userStore } = useStores()
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isLoading, setLoading] = useState(false)
//   const [projects, setProjects] = useState([])
//   const itemImageRef = useRef<RefItemProjectObject>(null)
//   const modalRef = useRef<RefModalObject>(null)

//   const checkURL = (data: string) => {
//     if (data.indexOf("http") !== -1) {
//       return true
//     }
//     return false
//   }

//   useEffect(() => {
//     setLoading(true)
//     const subscriber = firestore()
//       .collection("projects")
//       .get()
//       .then((querySnapshot) => {
//         if (querySnapshot && querySnapshot.size > 0) {
//           const arr = []
//           querySnapshot.forEach((documentSnapshot) => {
//             //console.log("User ID: ", documentSnapshot.data().description)
//             if (
//               documentSnapshot.data().backgroundURL &&
//               checkURL(documentSnapshot.data().backgroundURL)
//             )
//               arr.push({
//                 id: documentSnapshot.id,
//                 poster: documentSnapshot.data().backgroundURL,
//                 description: documentSnapshot.data().description,
//                 title: documentSnapshot.data().title,
//                 distributed: documentSnapshot.data().createdAt,
//               })
//           })
//           if (arr && arr.length > 0) {
//             setLoading(false)
//             setProjects(arr)
//           }
//         }
//       })
//     // const subscriber = firestore()
//     //   .collection("projects")
//     //   .doc("YzTWGplZs2b4gCPevLW32jxNdWL2")
//     //   .onSnapshot((documentSnapshot) => {
//     //     console.log("User data: ", documentSnapshot.data())
//     //   })

//     // // Stop listening for updates when no longer required
//     return () => subscriber
//   }, [])

//   const onViewableItemsChanged = (index: number) => {
//     try {
//       //setCurrentIndex(index)
//       if (itemImageRef && itemImageRef.current) {
//         //setCurrentIndex(index)
//         itemImageRef.current.tooglePlay(index, videos[index].url)
//         //itemVideoRef.current.setVideoUrl(videos[index].url, index)
//       }
//     } catch (error) {}
//   }

//   const onBeforeSnapToItem = (index: number) => {
//     try {
//       if (itemImageRef && itemImageRef.current) {
//         //itemImageRef.current.resetVideo()
//         //itemVideoRef.current.setVideoUrl(videos[index].url, index)
//       }
//     } catch (error) {}
//   }

//   // const onMomentumScrollEnd = ({ nativeEvent }) => {
//   //   const newIndex = Math.ceil(nativeEvent.contentOffset.y / HEIGHTBAR())
//   //   if (itemImageRef && itemImageRef.current) {
//   //     itemImageRef.current.tooglePlay(newIndex, videos[newIndex].url)
//   //     //itemVideoRef.current.setVideoUrl(videos[index].url, index)
//   //   }
//   // }

//   const showModal = () => {
//     if (modalRef && modalRef.current) {
//       modalRef.current.toggleModal()
//     }
//   }

//   const renderItem = useCallback(
//     ({ item, index }) => {
//       return (
//         <ProjectImageItem
//           url={index === currentIndex ? item.url : ""}
//           ref={itemImageRef}
//           item={item}
//           onPress={() => {}}
//         />
//       )
//     },
//     [currentIndex],
//   )

//   return (
//     <BackgroundScreen>
//       <SafeAreaView style={styles(HEIGHTBAR()).safeArea}>
//         <View>
//           {isLoading ? (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//               <Text tx={"loadingProjects"} style={styles().lblLoading} />
//             </View>
//           ) : (
//             <Carousel
//               extraData={currentIndex}
//               enableMomentum={false}
//               swipeThreshold={0}
//               data={projects}
//               vertical
//               sliderHeight={HEIGHTBAR()}
//               itemHeight={HEIGHTBAR()}
//               renderItem={renderItem}
//               onBeforeSnapToItem={onBeforeSnapToItem}
//               onSnapToItem={onViewableItemsChanged}
//             />
//           )}

//           {/* <ProjectVideos ref={itemVideoRef} url="" /> */}
//           {/* <FlatList
//             style={styles.content}
//             //contentContainerStyle={styles.content}
//             data={DATA}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//           /> */}
//           {/* <TouchableOpacity
//             onPress={() => {
//               authStore.resetAuth()
//             }}
//           >
//             <Text style={{ color: "white" }}>{"Logout"}</Text>
//           </TouchableOpacity>
//           <RoundedButton content={"CTV"} onPress={() => {}} />
//           <View style={{ height: 100 }} />
//           <IconButton disabled={disabled} onPress={() => {}}>
//             <CameraIcon color={disabled ? "#00000060" : colors.primary.blue} />
//           </IconButton>
//           <View style={{ height: 100 }} />
//           <CircleButton disabled={disabled} onPress={() => {}}>
//             <LikeIcon color={disabled ? "#00000060" : colors.primary.yellow} />
//           </CircleButton>
//           <View style={{ height: 100 }} />
//           <Avatar url={userStore.user.photoURL} />
//           <View style={{ height: 100 }} />
//           <AvatarProfile />
//           <UpVoteReply /> */}
//         </View>
//         {/* <StoryDetail ref={modalRef} /> */}
//       </SafeAreaView>
//     </BackgroundScreen>
//   )
// }

// export default HomeScreen
