const new_quote = document.getElementById("new-quote");
const quotes = [
    {quote: "You should know that all power comes at a price. For every bit of power you gain, so too do you gain more responsibility?", name: "Zhongli"},
    {quote: "Every journey has its final day. Don’t rush!", name: "Zhongli"},
    {quote: "I need your actions, not your words.", name: "Yae Miko"},
    {quote: "Everyone has their own perspective, there’s nothing strange about that.", name: "Thoma"},
    {quote: "A blade is like a tea-leaf. Only those who sample it many times can appreciate its true qualities.", name: "Kamisato Ayaka"},
    {quote: "Do not seek to emulate the past, for there is no law that can suffice for all time.", name: "Yanfei"},
    {quote: "Reality is the stillness buried deep beneath the illusion.", name: "Raiden Shogun"},
    {quote: "If you can change something, change it. If you can’t, don’t waste time thinking about it.", name: "Beidou"},
    {quote: "Manifest Eternity per the Almighty Shogun’s will — that is what I aspire to.", name: "Kujou Sara"},
    {quote: "Your kindness warms my heart more than the brightest flame ever could.", name: "Thoma"},
    {quote: "The world remains constant over the centuries. But human life is like the dew at dawn or a bubble rising through water. Transitory.", name: "Raiden Shogun"},
    {quote: "We’re setting sail! Men, to your posts! A new adventure is about to begin!", name: "Beidou"},
    {quote: "Inactivity serves no purpose whatsoever.", name: "Raiden Shogun"},
    {quote: "Yesterday’s experiences make me stronger today.", name: "Keqing"},
    {quote: "Going out into the world and investigating, turning the “unknown” into the “known.” Ahhh, I missed this feeling.", name: "Albedo"},
];
const rainbow_colors = [
    "#E23A3A",
    "#E2673A",
    "#F8C734",
    "#65AD38",
    "#389FAD",
    "#4538AD",
    "#7C38AD"
];
$(document).ready(function() {
    function generate_quote(quotes){
        const $color = Math.floor(Math.random() * rainbow_colors.length);
        const $number = Math.floor(Math.random() * quotes.length);
        $("#commas").css("color", rainbow_colors[$color]);
        $("#text").text("   " + quotes[$number].quote);
        $("#author").text("- " + quotes[$number].name);
        $("body").css("background-color", rainbow_colors[$color]);
        $("#text").css("color", rainbow_colors[$color]);
        $("#author").css("color", rainbow_colors[$color]);
        $("#new-quote").css("background-color", rainbow_colors[$color]);
        $("#tweet-quote").css("background-color", rainbow_colors[$color]);
        document.getElementById('tweet-quote').href="https://twitter.com/intent/tweet/?text=" + quotes[$number].quote;
    }
    generate_quote(quotes);
    $("#new-quote").click(function() {
        generate_quote(quotes);
    });
});
