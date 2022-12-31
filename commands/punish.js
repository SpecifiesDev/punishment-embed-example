const discord = require('discord.js');

const punish = async message => {

    // let's create a new Date object to get the time of command execution, we could also create a new date from an inputted timestamp
    let date = new Date();

    // let's create a staff member to show an example of placing grabbed information into the embed
    let staff = "Austin#9949"; // typically speaking it'd be in-game-name, but should generally take a string of either type. We could create validation methods to ensure the input is correct.

    // store my uuid here for convenience
    let uuid = "a91c7075-c11c-473b-9c8f-b53ae9685ea0";

    // here we would extract the punishment time and add it to the date object
    date.setHours(date.getHours() + 6); // in this example we only add 6 hours, but we could add days, months, years, etc.

    // let's create a full discord embed
    let embed = new discord.EmbedBuilder()
        .setTitle('csdad') // here we'd set the player's name. I'm setting mine.
        .setDescription(`You have been muted for Punishment. \n\n Tier: 2 \n\n Ends: ${date.toLocaleString()}`) // in this example I display the end date here. another option is setting it to the actual timestamp
        .setColor('#87a8de')
        .setFooter({text: `Punished by ${staff}`}) // here we'd set the staff member's name. I'm setting mine.
        .setTimestamp() // doing this way will set a generic timestamp
        .setThumbnail(`https://crafatar.com/renders/body/${uuid}`) // set the thumbnail of the player's head. We use the craftar API. For more information: https://crafatar.com/

    // send the embed to the user
    message.channel.send({ embeds: [embed] });

}

module.exports = { execute: punish };