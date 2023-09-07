import React from 'react'
import { Text, View } from 'react-native'

interface Props extends React.Attributes  {
  budget: Budget
}

export const BudgetItem = (props: Props) => {
  const { budget } = props

  return (
    <View>
      <Text>{`${budget.name} - ${budget.percentage}%`} </Text>
    </View>
  )
}
