import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { title } from 'process';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  fontStyle: 'italic',
  fontWeight: "bold"
});

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 45,
    flexDirection: 'column',
  },
  section: {
    flexGrow: 1
  },
  required: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  sectionTitle: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold"
  },
  sectionSubtitle: {
    fontSize: 15,
    fontStyle: "italic",
  },
  sectionHead: {
    fontSize: 30,
    marginTop: 25
  }

});

// Create Document Component
export const MyDocument = (props) => {
  console.log(props.data)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {props.data.map((section => {
          return (
            <View>
              {mySection({ name: section.name, data: section.data })}
            </View>

          )
        }))}
      </Page>
    </Document>
  );
}

const mySection = (props) => {
  if (props.name === "Required") {
    return (
      <View style={styles.required}>
        <Text style={styles.title}>{props.data.val[0].formState.val}</Text>
        <View style={{ alignItems: "center", alignContent: "center"}}>
          <View style={{flexDirection: "row"}}>
          <Text style={{textAlign:"left"}}>{props.data.val[1].formState.val + "        "}</Text>
          <Text style={{textAlign:"right"}}>{props.data.val[2].formState.val}</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHead}>{props.name}</Text>
      {props.data.val.map((item, index) => {
        if (index % 4 === 0) {
          // Case 1
          return (
            <View key={index}>
              <Text style={styles.sectionTitle}>{props.data.val[index].formState.val}</Text>
            </View>
          );
        } else if (index % 4 === 1) {
          // Case 2
          return (
            <View key={index}>
              <Text style={styles.sectionSubtitle}>{props.data.val[index].formState.val}</Text>
            </View>
          );
        } else if (index % 4 === 2) {
          // Case 3
          return (
            <View key={index}>
              <Text >{props.data.val[index].formState.val}</Text>
            </View>
          );
        } else {
          // Case 4
          return (
            <View key={index}>
              <Text >{props.data.val[index].formState.val}</Text>
            </View>
          );
        }
      })}
    </View>
  );
}

export default MyDocument;