import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { budgets } from '../api/mockData/budgets'
import { BudgetItem } from '../components'

export const CategoriesScreen = () => {
  return (
    <SafeAreaView>
      <FlatList 
        data={budgets}
        renderItem={({ item }) => (<BudgetItem budget={item} />)}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}
