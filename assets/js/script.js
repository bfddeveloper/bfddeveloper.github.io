document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });

    // Results gallery: click an image to view it full size
    const galleryImages = document.querySelectorAll('.results-gallery img, .post-view .content .image-gallery img');
    if (galleryImages.length) {
        const lightbox = document.createElement('dialog');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = '<img alt=""><p class="lightbox-caption"></p><button type="button" class="lightbox-close" aria-label="Close">&times;</button>';
        document.body.appendChild(lightbox);
        const lbImg = lightbox.querySelector('img');
        const lbCaption = lightbox.querySelector('.lightbox-caption');

        galleryImages.forEach(function(img) {
            img.addEventListener('click', function() {
                lbImg.src = img.currentSrc || img.src;
                lbImg.alt = img.alt;
                const caption = img.closest('figure') && img.closest('figure').querySelector('figcaption');
                lbCaption.textContent = caption ? caption.textContent : '';
                lightbox.showModal();
            });
        });
        // Close on backdrop click, the close button, or Esc (built in)
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
                lightbox.close();
            }
        });
    }

    // 3D model viewer: load the web component only when the visitor asks for it
    document.querySelectorAll('.model-viewer-wrap').forEach(function(wrap) {
        wrap.querySelector('.model-viewer-load').addEventListener('click', function() {
            if (!document.querySelector('script[data-model-viewer]')) {
                const script = document.createElement('script');
                script.type = 'module';
                script.src = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4/dist/model-viewer.min.js';
                script.dataset.modelViewer = 'true';
                document.head.appendChild(script);
            }
            const viewer = document.createElement('model-viewer');
            viewer.setAttribute('src', wrap.dataset.src);
            viewer.setAttribute('alt', wrap.dataset.alt);
            viewer.setAttribute('camera-controls', '');
            viewer.setAttribute('auto-rotate', '');
            viewer.setAttribute('shadow-intensity', '1');
            wrap.replaceChildren(viewer);
        });
    });
});
