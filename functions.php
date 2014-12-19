<?php
/**
 * Artscore Studio functions and definitions
 *
 * Sets up the theme and provides some helper functions, which are used
 * in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development and
 * http://codex.wordpress.org/Child_Themes), you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are instead attached
 * to a filter or action hook.
 *
 * For more information on hooks, actions, and filters, @link http://codex.wordpress.org/Plugin_API
 *
 * @package WordPress
 * @subpackage Artscore_Studio
 * @since Artscore Studio 1.0
 */

/**
 * Artscore Studio setup.
 *
 * Sets up theme defaults and registers the various WordPress features that
 * Artscore Studio supports.
 *
 * @uses add_theme_support() To add support for post thumbnails, automatic feed links,
 * 	custom background, and post formats.
 *
 * @since Artscore Studio 1.0
 */
function artscore_studio_setup()
{
	// Add thumbnail support for posts
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 390, 390);
} 
add_action( 'after_setup_theme', 'artscore_studio_setup' );

/**
 * Enqueue scripts and styles
 */
function artscore_studio_scripts()
{
	// Enqueue Stylesheets
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/Resources/bootstrap/css/bootstrap.css' );
	wp_enqueue_style( 'bootstrap-theme', get_template_directory_uri() . '/Resources/bootstrap/css/bootstrap-theme.css' );
	wp_enqueue_style( 'jquery-fullpage-css', get_template_directory_uri() . '/assets/fullPage.js/jquery.fullPage.css' );
	wp_enqueue_style( 'romaricdoublet', get_template_directory_uri() . '/Resources/website/css/app.css' );
	wp_enqueue_style( 'blog-css', get_template_directory_uri() . '/style.css' );
	
	// Enqueue javascript
	wp_enqueue_script( 'jquery2', get_template_directory_uri() . '/assets/jquery/jquery.min.js' );
	wp_enqueue_script( 'jquery-easings', get_template_directory_uri() . '/assets/fullPage.js/vendors/jquery.easings.min.js' );
	wp_enqueue_script( 'jquery-slimscroll', get_template_directory_uri() . '/assets/fullPage.js/vendors/jquery.slimscroll.min.js' );
	wp_enqueue_script( 'jquery-fullpage', get_template_directory_uri() . '/assets/fullPage.js/jquery.fullPage.min.js' );
	wp_enqueue_script( 'jquery-fullpage', get_template_directory_uri() . '/assets/jquery-backstretch/jquery-backstretch.min.js' );
	wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/assets/bootstrap/js/bootstrap.js' );
	
	wp_enqueue_script( 'romaricdoublet-js', get_template_directory_uri() . '/Resources/website/js/app.js' );
}

add_action( 'wp_enqueue_scripts', 'artscore_studio_scripts' );

/**
 * Get News Highlights
 */
function artscore_studio_get_highlights()
{
	$query = new WP_Query('cat=9');
	
	$return = '';
	
	if ( $query->have_posts() ) {
		while( $query->have_posts() ) {
			$query->the_post();
			$backgroundImg = get_image('background_image', 1, 1, 0, get_the_ID());
			$return .= '<div class="highlight" data-img="'.$backgroundImg.'">';
			$return .= '<h2><a href="' . get_permalink() . '" title="' . get_the_title() . '">' . get_the_title() . '</a></h2>';
			$return .= '<div class="excerpt">' . get_the_excerpt() . '</div>';
			$return .= '</div>';
		}
		wp_reset_postdata();
	}
	
	return $return;
}

if ( ! function_exists( 'artscore_studio_content_nav' ) ) :
/**
 * Displays navigation to next/previous pages when applicable.
*
* @since Artscore Studio 1.0
*/
function artscore_studio_content_nav( $html_id ) {
	global $wp_query;

	$html_id = esc_attr( $html_id );

	if ( $wp_query->max_num_pages > 1 ) : ?>
		<nav id="<?php echo $html_id; ?>" class="navigation" role="navigation">
			<h3 class="assistive-text"><?php _e( 'Post navigation', 'artscore_studio' ); ?></h3>
			<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'artscore_studio' ) ); ?></div>
			<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'artscore_studio' ) ); ?></div>
		</nav><!-- #<?php echo $html_id; ?> .navigation -->
	<?php endif;
}
endif;

if ( ! function_exists( 'artscore_studio_entry_meta_categories' ) ) :
/**
 * Set up post entry meta.
*
* Prints HTML with meta information for current post: categories, tags, permalink, author, and date.
*
* Create your own artscore_studio_entry_meta() to override in a child theme.
*
* @since Artscore Studio 1.0
*
* @return void
*/
function artscore_studio_entry_meta_categories() {
	$post_categories = get_the_category();
	$categories = array();
	foreach($post_categories as $category) {
		if ($category->term_id != 9) {
			$categories[] = $category->name;
		}
	}
	printf('<span class="glyphicon glyphicon-tags"></span> %s', implode(', ', $categories) );
}
endif;

if ( ! function_exists( 'artscore_studio_entry_meta_title' ) ) :
	/**
	 * Set up post entry meta.
	*
	* Prints HTML with meta information for current post: categories, tags, permalink, author, and date.
	*
	* Create your own artscore_studio_entry_meta() to override in a child theme.
	*
	* @since Artscore Studio 1.0
	*
	* @return void
	*/
	function artscore_studio_entry_meta_title() {
		$date = sprintf( '<a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%4$s</time></a>',
			esc_url( get_permalink() ),
			esc_attr( get_the_time() ),
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() )
		);
		
		$author = sprintf( '<span class="author vcard"><a class="url fn n" href="%1$s" title="%2$s" rel="author">%3$s</a></span>',
			esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
			esc_attr( sprintf( __( 'View all posts by %s', 'twentytwelve' ), get_the_author() ) ),
			get_the_author()
		);

		printf('Publié le %s <span class="by-author"> par %s</span>', $date, $author);
	}
endif;

if ( ! function_exists('artscore_studio_read_more_link')) :

	/**
	 * Excerpt read more link
	 * @param unknown $more
	 * @return string
	 */
	function artscore_studio_read_more_link($more)
	{
		global $post;
		return '<span class="read-more"><a href="'.get_permalink().'" title="Lire la suite de '.get_the_title().'">Lire la suite... <span class="glyphicon glyphicon-chevron-right"></span></a></span>';
	}
	add_filter('excerpt_more', 'artscore_studio_read_more_link');
endif;

if ( ! function_exists('artscore_studio_content_read_more_link')) :

	function artscore_studio_content_read_more_link($link)
	{
		return '<span class="read-more">'.$link.'</span>';
	}
	add_filter('the_content_more_link', 'artscore_studio_content_read_more_link');
endif;

if ( ! function_exists( 'artscore_studio_comment' ) ) :
/**
 * Template for comments and pingbacks.
*
* To override this walker in a child theme without modifying the comments template
* simply create your own twentytwelve_comment(), and that function will be used instead.
*
* Used as a callback by wp_list_comments() for displaying the comments.
*
* @since Artscore Studio 1.0
*
* @return void
*/
function artscore_studio_comment( $comment, $args, $depth )
{
	$GLOBALS['comment'] = $comment;
	
	switch ( $comment->comment_type ) :
		case 'pingback' :
		case 'trackback' :
		// Display trackbacks differently than normal comments.
		?>
		<div id="div-comment-<?php comment_ID(); ?>" <?php comment_class(); ?>>
			<div class="container">
				<div class="row">
					<div class="col-sm-4"></div>
					<div class="col-sm-8 page-comments-area">
						<p><?php _e( 'Pingback:', 'twentytwelve' ); ?> <?php comment_author_link(); ?> <?php edit_comment_link( __( '(Edit)', 'twentytwelve' ), '<span class="edit-link">', '</span>' ); ?></p>
					</div>
				</div>
			</div>
			<?php
			break;
		default :
			// Proceed with normal comments.
			global $post;
			?>
			<div id="div-comment-<?php comment_ID(); ?>" <?php comment_class(); ?>>
				<div class="container">
					<div class="row">
						<div class="col-sm-4 sidebar">
							<header class="comment-meta comment-author vcard text-right">
							<?php
								printf( '<cite><b class="fn">%1$s</b> %2$s</cite> :',
									get_comment_author_link(),
									// If current post author is also comment author, make it known visually.
									( $comment->user_id === $post->post_author ) ? '<span>' . __( 'Post author', 'twentytwelve' ) . '</span>' : ''
								);
								printf( '<a href="%1$s"><time datetime="%2$s">%3$s</time></a>',
									esc_url( get_comment_link( $comment->comment_ID ) ),
									get_comment_time( 'c' ),
									/* translators: 1: date, 2: time */
									sprintf( __( '%1$s %2$s', 'twentytwelve' ), get_comment_date(), get_comment_time() )
								);
							?>
							</header>
							<div class="tools">
								<div class="tool edit-link pull-left"><?php edit_comment_link( '<span class="glyphicon glyphicon-edit"></span>' ); ?></div>
							</div>
						</div>
						<div class="col-sm-8 content">
							<article id="comment-<?php comment_ID(); ?>" class="comment">
								<?php if ( '0' == $comment->comment_approved ) : ?>
									<p class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.', 'twentytwelve' ); ?></p>
								<?php endif; ?>
					
								<section class="comment-content comment">
									<?php comment_text(); ?>
									
								</section><!-- .comment-content -->
					
								<div class="reply">
									<?php comment_reply_link( array_merge( $args, array( 'reply_text' => __( 'Répondre', 'artscore_studio' ), 'after' => ' <span class="glyphicon glyphicon-arrow-down"></span>', 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
								</div><!-- .reply -->
							</article><!-- #comment-## -->
						</div>
					</div>
				</div>
			
			<?php
			break;
		
	endswitch; // end comment_type check
}
endif;

function artscore_studio_form_comment_options()
{
	$options = array();
	
	// Fields
	$fields = array();
	
	// Author field
	$author = '<div class="form-group">'.
		'<label for="author" class="col-sm-3 control-label">Nom <span>*</span> :</label>'.
		'<div class="col-sm-8">'.
			'<input type="text" class="form-control" name="author" id="author" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" ' . $aria_req . ' />'.
		'</div>'.
	'</div>';
	$fields['author'] = $author;
	
	// E-mail field
	$email = '<div class="form-group">'.
		'<label for="email" class="col-sm-3 control-label">E-mail <span>*</span> :</label>'.
		'<div class="col-sm-8">'.
			'<input type="email" class="form-control" name="email" id="email" value="' . esc_attr( $commenter['comment_author_email'] ) . '" ' . $aria_req . ' />'.
		'</div>'.
	'</div>';
	$fields['email'] = $email;
	
	// url field
	$url = '<div class="form-group">'.
			'<label for="url" class="col-sm-3 control-label">Site Internet :</label>'.
			'<div class="col-sm-8">'.
			'<input type="text" class="form-control" name="url" id="url" value="' . esc_attr( $commenter['comment_author_url'] ) . '" ' . $aria_req . ' />'.
			'</div>'.
			'</div>';
	$fields['url'] = $url;
	
	$options['fields'] = apply_filters( 'comment_form_default_fields', $fields );
	
	// Comment field
	$comment = '<div class="form-group">'.
		'<label for="comment" class="col-sm-3 control-label">Commentaire <span>*</span> :</label>'.
		'<div class="col-sm-8">'.
			'<textarea name="comment" class="form-control" id="comment" cols="45" rows="8" aria-required="true"></textarea>'.
		'</div>'.
	'</div>';
	$options['comment_field'] = $comment;
	
	// Disable notes after form
	$options['comment_notes_after'] = '';
	
	return $options;
}

/**
 * Post toolbar
 */
function the_toolbar_post()
{
	global $post;
	
	echo '<ul class="toolbar-post-list">'.
		'<li class="tool comments-link pull-left">'.
			'<a href="' . get_permalink() . '#comments" title="Voir tous les commentaires">'.
				'<span class="label label-primary">'.get_comments_number().'</span>'.
				'<span class="artscore-comment"></span>'.
			'</a>'.
		'</li>'.
		'<li class="tool comments-link pull-left">'.
			'<a href="http://www.twitter.com/share" class="tweet" data-via="artscorestudio" data-hashtags="" data-uri="'.get_permalink().'" title="Partager sur Twitter">'.
			'<span class="label label-primary count"></span>'.
				'<span class="artscore-twitter"></span>'.
			'</a>'.
		'</li>';
	
	echo edit_post_link( '<span class="glyphicon glyphicon-edit"></span>', '<li class="tool edit-link pull-left">', '</li>' );
	
	echo '</ul>';
}
