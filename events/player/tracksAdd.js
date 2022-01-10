module.exports = async(queue, tracks, client) => {

    queue.metadata.editReply(`Tracks in der Warteschlange ${tracks.length}\nSource: ${tracks.source}`).then(async(msg)=>{
        setTimeout(function(){
            msg.delete();
        }, 10000);
    })

};