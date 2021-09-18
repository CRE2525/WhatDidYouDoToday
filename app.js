var button = document.querySelector("button");
let output_fact = document.querySelector("#output_html");
let output_question = document.querySelector("#output_question");
let output_today = document.querySelector("#output_today");

var image = new Image();
image.width = "400";
$("#video").html(image);


var input;

let fact_list = [
    {
        fact: "Bethoven wrote his first symphony when he was 8.",
        age: 8,
        src: "https://assets.classicfm.com/2012/34/young-beethoven-aged-13-1345467421-view-0.jpg"
    },
    {
        fact: "When he was only 10 years old, Terence Tao became the youngest person ever to attend the Math Olympiad, and went on to be the youngest gold medalist in history.",
        age: 10,
        src: "https://static01.nyt.com/images/2015/07/26/magazine/26tao2/26mag-26tao-t_CA0-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    },
    {
        fact: "Only being 13, Kokona Hiraki won Silver in skateboarding for Japan in the 2020 Olympics.",
        age: 13,
        src: "https://i.insider.com/610a37ddc31de700184a1c0c?width=700"
    },
    {
        fact: "When she was 15, Charlie D'Amelio became the most followed person on Tik-tok, and basically becoming the famous teenager in the world.",
        age: 15,
        src: "https://pyxis.nymag.com/v1/imgs/dae/208/7c5aa0e8235cd38a4696c49a133453f52a-charli-damelio.rsquare.w1200.jpg"
    },
    {
        fact: "At the 2016 Olympics, 16 year old Penny Oleksiak set an Olympic world record for 100 meter freestyle, becoming the youngest Canadian to win a Gold Medal.",
        age: 16,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYMbIVMTUa8G_YVYqsqlhuze1DWXWSJl58Q&usqp=CAU"
    },
    {
        fact: "When she was 17, Joan of Arc joined the military, arrived at the besieged city of Orléans, and lead the French to defeat the British.",
        age: 17,
        src: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwODI5ODEwODQxMzYzODE2/gettyimages-2629951.jpg"
    },
    {
        fact: "At age 18, Mary Shelly wrote Frankenstein.",
        age: 18,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mary_Wollstonecraft_Shelley_Rothwell.tif/lossy-page1-1200px-Mary_Wollstonecraft_Shelley_Rothwell.tif.jpg"
    },
    {
        fact: "When he was 19, Mark Zuckerburg built Facebook, and proceeded to become the worlds youngest self made billionare.",
        age: 19,
        src: "https://i.pinimg.com/originals/01/a2/92/01a29230a492a5e8873650deabb23704.jpg"
    },
    {
        fact: "Augustus Caesar (Octavian at the time) became a Roman Senator at 20, and went on to be the first emperor of the Roman Empire.",
        age: 20,
        src: "https://www.history.com/.image/t_share/MTU3ODc4NjAyOTgzNjc5NzEx/hith-8-things-augustus-2.jpg"
    },
    {
        fact: "When he was 21, David Karp created Tumblr, which he would go on to sell for 1.1 billion in 2013.",
        age: 21,
        src: "https://i2.cdn.turner.com/money/dam/assets/130520085416-david-karp-tumblr-yahoo-640x360.jpg"
    },
    {
        fact: "At age 22, Alexander Hamilton became George Washington's aide-de-camp in the Revolutionary War.",
        age: 22,
        src: "https://www.history.com/.image/t_share/MTczODY5NTMzMTM4NzkwMjQx/alexander-hamilton-gettyimages-158653524.jpg"
    },
    {
        fact: "Sir Isaac Newton constructed the theory of Gravity at age 23.",
        age: 23,
        src: "https://lh4.googleusercontent.com/proxy/jGLtvxQOp7PB4xEwGJa9jQcRYhgydZElwlU_2oJNgXMRwJYX7tSCcHHWJlxrlYnC7kXXNG5fzYqECOxr5UgsFezdeBfuOnx0ZkxfV7frGyc0jwq9bNhlvMYKQA=s0-d"
    },
    {
        fact: "When he was 24, PewDiePie became the most subscribed youtuber, who would go on to be the first individual creator to reach 100 million subscribers in 2019.",
        age: 24,
        src: "https://variety.com/wp-content/uploads/2013/08/pewdiepie.png"
    },
    {
        fact: "At age 25, Alexander the Great had conquered most of the known Western world and had built the largest empire in history.",
        age: 25,
        src: "https://images.immediate.co.uk/production/volatile/sites/7/2019/05/GettyImages-184255971-0a90115-30ece46.jpg?quality=90&resize=620,413"
    },
    {
        fact: "At age 26, Valentina Tereshkova became the woman to go to space.",
        age: 26,
        src: "https://cdn.mos.cms.futurecdn.net/awH8XhTo5iHaRQ3zMKwxCf-320-80.jpg"
    },
    {
        fact: "When he was only 27 years old, Yuri Gagarin was first human to journey to outer space.",
        age: 27,
        src: "https://static.wikia.nocookie.net/space/images/6/6e/Space-heroes-photos-yuri-gagarin-5.jpeg/revision/latest?cb=20120501080028"
    },
    {
        fact: "At age 32, Damien Chazelle became the youngest director to win an Academy Award for his film La-La Land.",
        age: 32,
        src: "https://variety.com/wp-content/uploads/2018/01/damien-chazelle.jpg?w=1000"
    },
    {
        fact: "At age 38, Neil Armstrong became the first human to set foot on the moon.",
        age: 38,
        src: "https://cms.qz.com/wp-content/uploads/2019/07/RTX6ZOI8-e1563355450820.jpg?quality=75&strip=all&w=1600&h=900&crop=1"
    },
    {
        fact: "When he was 42, Teddy Roosevelt became president of the United States of America.",
        age: 42,
        src: "https://cdn.theatlantic.com/thumbor/yHkF39-Yh9KzhmVjlBAHCWy7Qrw=/0x143:3000x1831/960x540/media/img/mt/2016/01/AP_04010108998/original.jpg"
    },
    {
        fact: "When he was 43, Napolean ruled much of the Western World and was the emporer of the most powerful empire in the world.",
        age: 43,
        src: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgyNDAxNTM5ODA3/napoleon-on-st-bernhard.jpg"
    },
    {
        fact: "In 2009, at age 47, Barrack Obama became the first black president of the United States.",
        age: 47,
        src: "https://cbsnews3.cbsistatic.com/hub/i/r/2008/11/05/d9935c08-a642-11e2-a3f0-029118418759/thumbnail/1200x630/d0710fecf9b3ca0dc8e4e487ef4e0e2f/image4572411x.jpg"
    },
    {
        fact: "At an age of 122, Jeanne Calment was the longest living human of all time. I guess you beat her?",
        age: 122,
        src: "https://ichef.bbci.co.uk/news/1024/branded_news/181E1/production/_108858789_mediaitem108858781.jpg"
    },
    {
        fact: "asaksdhnjas",
        age: 99999999999
    }
]

let question_list = ["Watch porn?", "Watch anime?", "Upvote a repost on reddit?", "Laugh at a 6 month old meme?", "Say 'bruh' unironically?", "Give your shitty opinion on twitter?"]

function got_num(num) {

    if(num < 9) {
        output_fact.textContent = "There is no way you are that young lol";
        output_question.textContent = " ";
        output_today.textContent = " ";
        image.src = " ";
    } else {
        let x = Math.floor(Math.random() * 6);
        output_question.textContent = question_list[x];
        output_today.textContent ="What did you do today?";
    }

    for(let i = 0; i < fact_list.length; i++){
        if(fact_list[i].age >= num) {
            image.src = fact_list[i - 1].src;
            output_fact.textContent = fact_list[i - 1].fact;
            return;
        }
    }
    output_fact.textContent = "bruh";
    return;
}

button.addEventListener("click", function(){
    input = parseInt(document.getElementById("num").value);
    got_num(input);
})

