var adject = ['a Software Engineer','Passionate','Logical','Open-Minded','a Perpetual Learner','Data Driven','a Maker'];

(function displayClass(i) {
    $('#word-rotate span').text(adject[i]).fadeIn(1000).delay(600).fadeOut(1000, function() {
        displayClass((i + 1) % adject.length);
    });
})(0);