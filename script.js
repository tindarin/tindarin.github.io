document.addEventListener('DOMContentLoaded', (event) => {
    console.log('网页已加载！');
});


<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const tag = document.getElementById('blog-tag');
        tag.addEventListener('click', function() {
            window.location.href = 'blog.html';
        });
    });
</script>
