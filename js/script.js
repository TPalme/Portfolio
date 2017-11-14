<!--//stackoverflow.com/questions/3264739/image-change-every-30-seconds-loop -->
<script language="javascript" type="text/javascript">
 var images = new Array()
 images[0] = "img/logo1.png";
 images[1] = "img/logo1blue.png";
 images[2] = "img/logo1.png";
 setInterval("changeImage()", 200);
 var x=0;

 function changeImage()
 {
            document.getElementById("img").src=images[x]
            x++;
            if (images.length == x)
            {
                x = 0;
            }
 }
</script>
