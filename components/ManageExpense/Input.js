import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"
import { GlobalStyles } from "../../constants/styles"

const Input = ({ style, label, inValid, textInputConfig }) => {
	const inputStyles = [styles.input]

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline)
	}

	if (inValid) {
		inputStyles.push(styles.inValidInput)
	}

	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={[styles.label, inValid && styles.inValidLabel]}>
				{label}
			</Text>
			<TextInput style={inputStyles} {...textInputConfig} />
		</View>
	)
}

export default Input

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 16,
	},
	label: {
		fontSize: 12,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: GlobalStyles.colors.primary100,
		color: GlobalStyles.colors.primary700,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top",
	},
	inValidLabel: {
		color: GlobalStyles.colors.error500,
	},
	inValidInput: {
		backgroundColor: GlobalStyles.colors.error50,
	},
})
