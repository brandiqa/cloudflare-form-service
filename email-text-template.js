const template = data => {
  return `
    Online Guest Book Contact
    --------------------------
    First Name : ${data.firstName}
    Last Name  : ${data.lastName}
    Email      : ${data.email}
    Message    : ${data.message}
    Subscribed : ${data.subscribed ? 'Yes' : 'No'}
`
}

export default template
