const webSocket = new webSocket("ws://127.0.0.1:3000")


webSocket.onmessage = (event)=>{
    handleSignalingData(JSON.parse(event.data))

}

function handleSignalingData(data)
{
    switch(data.type)
    {
        case "answer":
            peerConn.setRemoteDescription(data.answer)
            break
        case "candidate":
            peerConn.addIceCandidate(data.candidate)
    }
}
let  username 
function sendusername()
{
    username = document.getElementById("username-input").value 
    sendData({
        type:"store_user"
    })
}

function sendData(data)
{
    data.username = username
    webSocket.send(JSON.stringify(data))
}


let localStream 
let peerConn
function startCall()
{
    document.getElementById("video-call-div")
    .style.display = "inline"

    navigator.getUserMedia({
        video:{
            frameRate:24,
            width:{
                min:480,ideal:720,max:1280
            },
            aspectRatio:1.33333
        },
        audio:true
    } , (stream)=>{
        localStream = stream
        document.getElementById("local-video").srcObject =localStream

        let configuration = {
            iceServers:[
                 {
                     "urls": ["stun.l.google.com:19302",
                        "stun1.l.google.com:19302",
                        "stun2.l.google.com:19302"]
                 }
            ]
        }

        peerConn = new RTCPeerConnection(configuration)
        peerConn.addStream(localStream)

        peerConn.onaddstream = (e) => {
            document.getElementById("remote-video").srcObject = e.stream
        }

        peerConn.onicecandidate = ((e) => {
            if(e.candidate == null)
                return
            sendData({
                type:"store_candidate",
                candidate : e.candidate
            })
        })


        createAndSendOffer()


    } , (error)=>{
        console.log(error)
    })
}


function createAndSendOffer()
{
    peerConn.createOffer((offer) => {
        sendData({
            type:"store-offer",
            offer:offer
        })
        peerConn.setlocalDescription(offer)
    },(error) => {
        console.log(error)
    })
}
