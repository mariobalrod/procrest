const normalizeUser = (data) => {
    return {
        id: data.id,
        username: data.username,
        email: data.email,
        bookings: data.bookings
    }
}

export default normalizeUser;