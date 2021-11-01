import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'


export default function OverlayonImageON(e,image) {
    document.getElementById("overlayImage").style.display = "block";
    document.getElementById("overlayImage").style.opacity = "1"
    document.getElementById("overlayImage").style.visibility = "visible";
}