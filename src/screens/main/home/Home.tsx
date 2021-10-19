import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import { View, SafeAreaView } from "react-native"
import Carousel from "react-native-snap-carousel"
import firestore from "@react-native-firebase/firestore"

import Text from "@components/text/text"
import BackgroundScreen from "@components/screen/backgroundScreen/BackgroundScreen"
import { HEIGHTBAR } from "@config/constants"
import ProjectImageItem, { RefItemProjectObject } from "./ProjectImageItem"

import styles from "./styles"

const HomeScreen: FC = () => {
  const [currentIndex] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])
  const itemImageRef = useRef<RefItemProjectObject>(null)

  const checkURL = (data: string) => {
    if (data.indexOf("http") !== -1) {
      return true
    }
    return false
  }

  useEffect(() => {
    setLoading(true)
    const subscriber = firestore()
      .collection("projects")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot && querySnapshot.size > 0) {
          const arr = []
          querySnapshot.forEach((documentSnapshot) => {
            if (
              documentSnapshot.data().backgroundURL &&
              checkURL(documentSnapshot.data().backgroundURL)
            )
              arr.push({
                id: documentSnapshot.id,
                poster: documentSnapshot.data().backgroundURL,
                description: documentSnapshot.data().description,
                title: documentSnapshot.data().title,
                distributed: documentSnapshot.data().createdAt,
              })
          })
          if (arr && arr.length > 0) {
            setLoading(false)
            setProjects(arr)
          }
        }
      })
    // Stop listening for updates when no longer required
    return () => subscriber
  }, [])

  const onViewableItemsChanged = (index: number) => {
    try {
      if (itemImageRef && itemImageRef.current) {
        //itemImageRef.current.tooglePlay(index, videos[index].url)
      }
    } catch (error) {}
  }

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <ProjectImageItem
          url={index === currentIndex ? item.url : ""}
          ref={itemImageRef}
          item={item}
          onPress={() => {}}
        />
      )
    },
    [currentIndex],
  )

  return (
    <BackgroundScreen>
      <SafeAreaView style={styles(HEIGHTBAR()).safeArea}>
        <View>
          {isLoading ? (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text tx={"loadingProjects"} style={styles().lblLoading} />
            </View>
          ) : (
            <Carousel
              extraData={currentIndex}
              enableMomentum={false}
              swipeThreshold={0}
              data={projects}
              vertical
              sliderHeight={HEIGHTBAR()}
              itemHeight={HEIGHTBAR()}
              renderItem={renderItem}
              onSnapToItem={onViewableItemsChanged}
            />
          )}
        </View>
      </SafeAreaView>
    </BackgroundScreen>
  )
}

export default HomeScreen
