const sendRedditPolitical = async (title, link) => {
    if (title) {
        await client.messages
            .create({
                to: "9083800126",
                from: "+15555555555",
                body:
                    "*** " +
                    type +
                    ": " +
                    item.toUpperCase() +
                    " ***" +
                    "\n\n" +
                    product
            })
            .then(message => console.log("Text Sent: ", message.sid));
    }
};
