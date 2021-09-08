
$(document).ready(function () {
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c4a38bc95fb749c7a9f5d13cea1725a4",
        success: function (data) {
            $('#main-headline-img1').attr("src", data.articles[0].urlToImage);
            $('#main-headline-title1').text(data.articles[0].title);
            $('#main-headline-source1').text(data.articles[0].source.name);
            $('#main-headline-description1').text(data.articles[0].description);
            $('#main-headline-url1').attr("href", data.articles[0].url);
            

            $('#main-headline-img2').attr("src", data.articles[1].urlToImage);
            $('#main-headline-title2').text(data.articles[1].title);
            $('#main-headline-source2').text(data.articles[1].source.name);
            $('#main-headline-description2').text(data.articles[1].description);
            $('#main-headline-url2').attr("href", data.articles[1].url);


            $('#main-headline-img3').attr("src", data.articles[2].urlToImage);
            $('#main-headline-title3').text(data.articles[2].title);
            $('#main-headline-source3').text(data.articles[2].source.name);
            $('#main-headline-description3').text(data.articles[2].description);
            $('#main-headline-url3').attr("href", data.articles[2].url);

            //console.log(data.articles[0].title);
        },
        error: function () {
            alert("Some Error Occured");
        }
    }),

        $.ajax({
            url: "  https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f02f8ca75eba4b6eb2fc5c5de82bd230",
            success: function (data) {
                
                for (let i = 0; i < 6; i++) {
                   
                    $('#techy').append(`
                    <article>
                    <h4>${data.articles[i].source.name}</h4>
                    <div>
                        <h2>${data.articles[i].title}</h2>

                        <p>${data.articles[i].description}</p>

                        <a href = "${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                   
                    <img src="${data.articles[i].urlToImage}">
                </article>
                    `)
                }
            },
            error: function () {
                alert("Some Error Occured");
            }
        }),

        

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f02f8ca75eba4b6eb2fc5c5de82bd230",
            success: function (data) {
                var jQueryScript = document.createElement('script');  
                jQueryScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js');
                document.head.appendChild(jQueryScript);
                for (let i = 0; i < 4; i++) {
                    var month = new Array();
                    month[0] = "January";
                    month[1] = "February";
                    month[2] = "March";
                    month[3] = "April";
                    month[4] = "May";
                    month[5] = "June";
                    month[6] = "July";
                    month[7] = "August";
                    month[8] = "September";
                    month[9] = "October";
                    month[10] = "November";
                    month[11] = "December";
                    let date=new Date(data.articles[i].publishedAt);
                    let newdate=date.getDay() +" "+ month[date.getMonth()] +" "+date.getFullYear();
                $('#main-panel').append(`
                <div class = "hot-topic">
                    <img src="${data.articles[i].urlToImage}" alt = "">

                    <div class="hot-topic-content ">
                        <h2 class="text-light" >${data.articles[i].title}</h2>

                        <h3> ~${newdate}  </h3>
                         
                        <a  href = "${data.articles[i].url}">Read More</a>
                    </div>
                </div>
                 `)
                }
            },
            error: function () {
                alert("Some Error Occured");
            }
        }),

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4a38bc95fb749c7a9f5d13cea1725a4",
            success: function (data) {
                for (let i = 4; i < 9; i++) {
              
                $('#main-left-panel').append(`
                <a  style="color:white" target="_blank" href="${data.articles[i].url}"><h3>${data.articles[i].title}<span style="color:rgba(255,163,26,1)">by ${data.articles[i].source.name}</span></h3></a>
                 `)
                }
            },
            error: function () {
                alert("Some Error Occured");
            }
        })


})