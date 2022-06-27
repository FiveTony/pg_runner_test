import svgSprite from "gulp-svg-sprite";
export const sprite = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg",
                    // ? Example include svg sprites
                    // * <svg>
                    // *	<use xlink:href="img/symbol/sprite.svg#ico-name"></use>
                    // * </svg>
                    // ? npm run sprite - команда для обновления спрайтов и добавления новых (реализована отдельно для экономии ресурсов)
                    example: false,
                },
            },
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}