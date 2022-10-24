
import ShopCart from '../components/ShopCart';

const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}
//For Sign Up Form
const validate = (data) => {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = "Name Required!"
    } else {
        delete errors.name
    }
    if (!data.email) {
        errors.email = "Email Required!"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email Address is Invalid!"
    } else {
        delete errors.email
    }
    if (!data.password) {
        errors.password = "Password is Required!"
    } else if (data.password.length < 6) {
        errors.password = "Passwords Should be At least 6 Characters!"
    } else {
        delete errors.password
    }
    if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm Password!"
    } else if (data.password !== data.confirmPassword) {
        errors.ConfirmPassword = "Password Do not Match!!"
    } else {
        delete errors.confirmPassword
    }

    if (data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accept our regulations!"
    }

    return errors;
}

export {shorten, isInCart, quantityCount, validate}