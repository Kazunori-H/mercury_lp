// ========================================
// DOMContentLoaded - ページ読み込み完了時の処理
// ========================================
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // ハンバーガーメニューの開閉
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        // ハンバーガーメニューのクリックイベント
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // メニュー内のリンクをクリックしたらメニューを閉じる
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // メニュー外をクリックしたらメニューを閉じる
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ========================================
    // スムーススクロール
    // ========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');

            // ハッシュのみの場合はスムーススクロールを適用
            if (href && href !== '#') {
                event.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // スクロール時のヘッダースタイル変更
    // ========================================
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // スクロール位置が50px以上の場合、ヘッダーにscrolledクラスを付与
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // ========================================
    // ページ読み込み時のスクロール位置調整
    // ========================================
    // URLにハッシュが含まれている場合の処理
    if (window.location.hash) {
        setTimeout(function() {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});
