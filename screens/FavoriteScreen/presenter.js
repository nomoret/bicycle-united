import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Separator from "../../components/Seperator";
import { TouchableOpacity } from "react-native-gesture-handler";
import { t } from "../../services/i18n";

const FavoriteScreen = props => {
  // console.log("FavoriteScreen", props);
  return (
    <View style={styles.container}>
      {props.locationList && props.locationList.length > 0 ? (
        <SectionList
          sections={props.locationList}
          renderSectionHeader={({ section }) => (
            <FavoriteItemHeader section={section} />
          )}
          renderItem={({ item }) => {
            return (
              <FavoriteItem
                item={item}
                handleDeleteItem={props.handleDeleteItem}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      ) : (
        <Text style={styles.empty}>{t(`favorite:emptyList`)}</Text>
      )}
    </View>
  );
};

const FavoriteItemHeader = ({ section }) => {
  const { title } = section;
  return <Text style={styles.header}>{`${title}`}</Text>;
};

const FavoriteItem = props => {
  const {
    item: { id, usableCount, entireCount },
    handleDeleteItem
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.item}>
        <Text style={styles.usable}>{usableCount}</Text>
        <Text style={styles.entire}>
          {" "}
          {t("favorite:usable")}
          {" / "}
          {t("favorite:max")}
          {` ${entireCount}`}
          {t("favorite:count")}
        </Text>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPressOut={() => handleDeleteItem(id)}
        >
          <Text>{t("favorite:delete")}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 3, paddingLeft: 15, paddingRight: 15 }}>
        <Separator />
      </View>
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
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginTop: 10,
    marginLeft: 5,
    color: "gray"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 30
  },
  usable: {
    color: "red",
    fontWeight: "700",
    marginLeft: 10
  },
  entire: {
    flexGrow: 1,
    fontWeight: "700"
  },
  deleteBtn: {
    width: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E99EE",
    borderRadius: 5
  }
});

export default FavoriteScreen;
