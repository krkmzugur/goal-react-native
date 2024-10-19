import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: '#756767' }}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    borderRadius: 6,
    marginVertical: 8,
    backgroundColor: 'purple',
  },
  goalText: {
    fontSize: 18,
    color: 'white',
  },
});
