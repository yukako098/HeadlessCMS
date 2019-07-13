<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'headless_react' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' fWO&%Jz~im/&[(uBqhD!cy&N_zH5q:$t2K+b7g_@G_jC$=,B+;-CuPA3H0Yz.GS' );
define( 'SECURE_AUTH_KEY',  ':3YwS>ME#O0Q: 7!^rvQo=;|PHW5$JF|tD^pxvwuR/d?S_yPsW,koh9.&+{MElq@' );
define( 'LOGGED_IN_KEY',    '{LqSx>GGRa:a*#qZ^k1kR?WF(mxj|X*08?dt7<K#%^L;=}jV]=n)a2S-kK,<IA/y' );
define( 'NONCE_KEY',        'qe[K0AQkWe7E GIICJ0-{RLZdiZ:xnQj0/m:!x_H7f Hr~q[Cz!]|RB&@_S%DM6P' );
define( 'AUTH_SALT',        'Y|CEL~9G@$UOzsB_QpS4@BgpT4UOD}*TK`/_AbL:1?y~U_p&-%#9Y~$$JJRD<**h' );
define( 'SECURE_AUTH_SALT', 'wvUH}]hh|;#HZ4FLvT9cJgOxe^?Kc+9q_<?/9[+oH3{iEc64qj4@0 Zq<n@ [Fq&' );
define( 'LOGGED_IN_SALT',   '{hUP=.c$3rd+/C]uMxW92S._Ok1FJ0aq~jhvWKgIq:Va2b>hB2o[&MWUevTi|)6&' );
define( 'NONCE_SALT',       '2Rficy>Gkd#9)?nwUm*!S#jU &BlJjF|m>(tGvLS=Ne~7asrS!-~A=6|Iu+i;O4f' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
