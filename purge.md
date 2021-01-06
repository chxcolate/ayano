# ">purge 15" - Purge

Purge is a command that will delete messages before the message that invoked it were sent, using .bulkDelete() and .delete().

The basic list of features is this:
- Purge up to 100 messages at a time with free Ayona (not Pro Ayona)
- Purge Infinite Messages at a time (using API things) with Pro Ayona
- Purging works like this:
  - normal
    - They type in ">purge <number of messages>" and it invokes the purge command
    - Ayona then sends a message saying something along the lines of "_Fetching **<number of messages>** messages..._", and then fetches <number of messages> messages.
    - After fetching the messages, Ayona uses ".edit()" to change her last message ("_Fetching **<number of messages>** messages..._" to "_Deleting **<fetched messages.size>** messages..._"
    - After deleting the messages, Ayona uses ".edit()" again to change the Deleting message to an embed showing the stats of the deletion (such as number of messages deleted, who sent the messages, etc.)
    - After 10 seconds, the embed message and the original purge command message is deleted unless the user (in specific) says cancel, canceling the deletion of the embed.
  - Mentions
    - No Minus - Same as normal, but checks the message's author to make sure it is the mentioned user. (>purge 15 @A1shi#2021 results in 15 messages getting fetched, but it only deletes the ones from me.)
    - Minus - Same as normal, but doesn't delete the mentioned user's messages (>purge 15 -@A1shi#2021 results in 15 messages getting deleted, except mine. (it fetches 15 messages, but skips over my messages when deleting them.)
- Aliases System. (>clear 15 is the same as >prune 15 which is the same as >purge 15, etc.)
