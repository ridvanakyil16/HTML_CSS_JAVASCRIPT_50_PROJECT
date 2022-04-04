const sounds = ['who_can_it_be_now', 'welcome_to_my_house', 'suga_boom_boom', 'ringing_old_phone', 'fancy_like', 'daughter_is_calling', 'beautiful_crazy']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener("click", () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}