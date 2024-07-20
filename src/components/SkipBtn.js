import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SkipBtn = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.skipBtnText}>Skip</Text>
    </TouchableOpacity>
  );
};

export default SkipBtn;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    marginTop: 50,
    borderRadius: 50,
    justifyContent: 'center',
    borderColor: '#D49621',
    borderWidth: 0.7,
    width:'28%',
  },
  skipBtnText: {
    color: '#D49621',
    fontSize: 16,
    textTransform:'uppercase',

  },
});
