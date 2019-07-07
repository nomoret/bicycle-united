import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Separator from "../../components/Seperator";
import { TouchableOpacity } from "react-native-gesture-handler";

const FavoriteScreen = props => {
  return (
    <View style={styles.container}>
      <Text> Favorite List</Text>
      {props.data.length > 0 ? (
        <SectionList
          sections={props.data}
          renderSectionHeader={({ section }) => (
            <FavoriteItemHeader section={section} />
          )}
          renderItem={({ item }) => (
            <FavoriteItem
              item={item}
              handleDeleteItem={props.handleDeleteItem}
            />
          )}
          keyExtractor={({ number }) => number}
        />
      ) : (
        <Text style={styles.empty}>
          Empty favorite list {"\n"}
          Please Resgist your favorite in map!!
        </Text>
      )}
    </View>
  );
};

const FavoriteItemHeader = ({ section }) => {
  const {
    title,
    data: [{ number }]
  } = section;
  return <Text style={styles.header}>{`${number} - ${title}`}</Text>;
};

const FavoriteItem = props => {
  const {
    item: { number, usableCount, entireCount },
    handleDeleteItem
  } = props;
  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.usable}>{usableCount}</Text>
        <Text
          style={styles.entire}
        >{` Usable / Max ${entireCount} count `}</Text>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPressOut={() => handleDeleteItem(number)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  empty: {
    // flexGrow: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginTop: 10,
    color: "gray"
  },
  item: {
    display: "flex",
    flexDirection: "row"
  },
  usable: {
    color: "red",
    fontWeight: "700"
  },
  entire: {
    flexGrow: 1,
    fontWeight: "700"
  },
  deleteBtn: {
    backgroundColor: "#3E99EE",
    borderRadius: 5
  }
});

export default FavoriteScreen;
