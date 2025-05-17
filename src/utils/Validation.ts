const validateMobileNumber = (phNumber: string): boolean => {
    const regex = /^[0-9]{10}$/; // Matches exactly 10 digits
    return regex.test(phNumber);
}

export default validateMobileNumber;