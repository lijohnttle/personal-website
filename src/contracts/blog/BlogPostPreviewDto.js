/**
 * Represents a blog post series item description.
 */
export class BlogPostPreviewDto {
    /**
     * @param {BlogPostPreviewDto} [props]
     */
    constructor(props) {
        /**
         * The ID of a blog post.
         * @type {String}
         * @public
         */
        this.id = props?.id;

        /**
         * The title of a blog post.
         * @type {String}
         * @public
         */
        this.title = props?.title;

        /**
         * The short description of a blog post.
         * @type {String}
         * @public
         */
        this.description = props?.description;

        /**
         * The image to be displayed in a blog post head.
         * @type {String}
         * @public
         */
         this.descriptionImage = props?.descriptionImage;

        /**
         * The URL slug of a blog post.
         * @type {String}
         * @public
         */
        this.slug = props?.slug;

        /**
         * The creation date of a blog post.
         * @type {String}
         * @public
         */
        this.createdOn = props?.createdOn;

        /**
         * The date of the last update of a blog post.
         * @type {String}
         * @public
         */
        this.updatedOn = props?.updatedOn;

        /**
         * The last publication date of a blog post.
         * @type {String}
         * @public
         */
        this.publishedOn = props?.publishedOn;

        /**
         * The value that indicates if blog post has been published and available for users.
         * @type {Boolean}
         * @public
         */
        this.published = props?.published;

        /**
         * Blog post visits.
         * @type {Number}
         * @public
         */
        this.visits = props?.visits;

        /**
         * Blog post category.
         * @type {String}
         * @public
         */
        this.category = props?.category;

        /**
         * Blog post series.
         * @type {String}
         * @public
         */
        this.series = props?.series;
    }
}