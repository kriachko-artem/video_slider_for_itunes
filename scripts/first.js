const main = document.querySelector('main')


const $form = $('#search-form')

function updateSlider (items){
    document.querySelector('header').classList.add('fined')
    main.innerHTML = '';

    const slider = document.createElement('div'),
        sliderItem = document.createElement('div'),
        h2 = document.createElement('h2'),
        imgHolder = document.createElement('div'),
        img = document.createElement('img');

    imgHolder.append(img)
    slider.classList.add('slider')
    sliderItem.classList.add('slider-item')
    imgHolder.classList.add('img-holder')
    main.append(slider)

    const bigSlider = document.createElement('div'),
        bigSliderItem = document.createElement('div'),
        bigContent = document.createElement('div'),
        video = document.createElement('video'),
        videoSource = document.createElement('source');


    bigSlider.classList.add('big_slider');
    bigSliderItem.classList.add('big_slider-item');
    bigContent.classList.add('big-content');
    video.controls = 'controls';
    video.width = 600;
    video.append(videoSource)
    bigContent.append(video)
    bigSliderItem.append(bigContent)

    main.append(bigSlider)

    console.dir(video)

    items.forEach(item=>{
        img.src = item.artworkUrl100;
        sliderItem.append(imgHolder)
        h2.innerText = item.trackName
        sliderItem.append(h2)
        slider.append(sliderItem.cloneNode(true))
        videoSource.src = item.previewUrl
        bigSlider.append(bigSliderItem.cloneNode(true))

        // console.log(item)

    })
    generateSlider()
    document.querySelectorAll('.slider .slick-arrow')
        .forEach(arrow=>{
            arrow.addEventListener('click',()=>{
                document.querySelectorAll('.big_slider-item')
                    .forEach(item=>{
                        if (!(item.classList.contains('slick-active'))){
                            video.paused = true;
                        }
                    })
            })
        })

}


const getData = (text) => {
  $.get('https://itunes.apple.com/search/limit=10&entity=musicVideo&term='+ text)
      .done((data)=>{
          const result = JSON.parse(data).results
          console.log(result)
          if (result.length > 0){
              updateSlider(result)
          } else {
              const h2 = document.createElement('h2');
              h2.innerText = 'Sorry, no results were found for your search.'
              main.append(h2)
          }
          })
      .fail((error)=>{
          console.log(error)})
}


$form.on('submit',(event)=>{
    event.preventDefault()
    const data = $('#form-input').val();
    const trimmedData = data.trim().toLowerCase()
    console.log(trimmedData)
    if (trimmedData){
        getData(trimmedData)
    }
    console.log('Good')
})
