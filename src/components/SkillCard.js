import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1e25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
