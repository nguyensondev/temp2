import React from "react"
import { View, TouchableOpacity } from "react-native"

import Text from "@components/text/text"

import styles from "./styles"

const ProjectItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.lblProjectName}>{"“when you see yourself”-- 2021 "}</Text>
      <Text style={styles.lblJob}>{"Kings of Leon Official"}</Text>
      <View style={styles.itemContent}>
        <TouchableOpacity style={styles.btnContent}>
          <Text tx={"common.content"} style={styles.btnProject} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContent}>
          <Text tx={"common.chat"} style={styles.btnProject} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContent}>
          <Text style={styles.btnProject}>{"NFT"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProjectItem
