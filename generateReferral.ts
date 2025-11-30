
const referralCodes = ["randomCode1", "randomCode2", "randomCode3", "randomCode4", "randomCode5"]

export const getGenerateRandomCode = () => {
    const result = referralCodes[Math.floor(Math.random() * referralCodes.length)]
    
    return result
}

// console.log(getGenerateRandomCode())