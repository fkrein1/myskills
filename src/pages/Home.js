import React, { useEffect, useState } from 'react';

import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return setGreeting('Good morning');
    }
    if (currentHour > 18) {
      return setGreeting('Good night');
    }
    return setGreeting('Good afternoon');
  }, []);

  function handleAddNewSkill() {
    setMySkills((prev) => [...prev, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Felipe</Text>
      <Text style={styles.subtitle}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#999',
    fontSize: 18,
    marginTop: 6,
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    padding: Platform.OS === 'ios' ? 15 : 12,
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
  },
});
