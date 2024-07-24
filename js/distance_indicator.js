export function updateDistanceIndicator(){

    const totalDistance = 4000;
    const bar = document.querySelector('.bar');
    const indicator = document.querySelector('.indicator');
    const barContainer = document.querySelector('.bar-container');
    let dist=0;

    function updateGauge(x) {
        if (x < 0) x = 0;
        if (x > totalDistance) x = totalDistance;

        const percentage = (x / totalDistance) * 100;
        bar.style.width = percentage + '%';
        indicator.style.left = 'calc(' + percentage + '% - 15px)'; // 15px to center the object image
    }

    // Simulate distance changes

    setInterval(() => {
      
        dist +=10; 
         
       if(dist>3999){
         dist-=4000;
       }
        updateGauge(dist);
     
        
    }, 10);
 
}