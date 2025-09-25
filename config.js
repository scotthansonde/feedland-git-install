module.exports = {
	"whatIsThis": "A simple example config.json file for a FeedLand installation, with none of the extra features turned on.",

	"port": 1452,

	"myDomain": process.env.MY_DOMAIN,
	"urlFeedlandApp": process.env.URL_FEEDLAND_APP,
	"urlServerForClient": process.env.URL_FEEDLAND_APP,


	"flWebsocketEnabled": process.env.FL_WEBSOCKET_ENABLED,
	"websocketPort": process.env.WEBSOCKET_PORT,
	"urlWebsocketServerForClient": process.env.URL_WEBSOCKET_SERVER_FOR_CLIENT,

	"smtpHost": process.env.SMTP_HOST,
	"smtpPort": process.env.SMTP_PORT,
	"smtpUsername": process.env.SMTP_USERNAME,
	"smtpPassword": process.env.SMTP_PASSWORD,

	"mailSender": process.env.MAIL_SENDER,
	"confirmEmailSubject": "FeedLand confirmation",
	"confirmationExpiresAfter": 86400,
	"urlServerForEmail": process.env.URL_FEEDLAND_APP,
	"flUseDatabaseForConfirmations": true,

	"database": {
		"host": process.env.DATABASE_HOST,
		"port": process.env.DATABASE_PORT,
		"user": process.env.DATABASE_USER,
		"password": process.env.DATABASE_PASSWORD,
		"database": process.env.DATABASE_DATABASE,
		"charset": "utf8mb4",
		"connectionLimit": 100,
		"ssl": {"rejectUnauthorized": true},
		"debug": false,
		"flLogQueries": false,
		"flQueueAllRequests": false,
		"flUseMySql2": true
	},

	"flUseS3ForStorage": process.env.FL_USE_S3_FOR_STORAGE,
	"s3PathForStorage": process.env.S3_PATH_FOR_STORAGE,


	"flUseTwitterIdentity": false,
	"flEnableNewUsers": process.env.FL_ENABLE_NEW_USERS,
	"flBackupOnStartup": false,

	"flNewsProducts": false,
	"flUserFeeds": process.env.FL_USER_FEEDS,
	"flLikesFeeds": process.env.FL_LIKES_FEEDS,



	"urlForFeeds": process.env.URL_FOR_FEEDS,
	"s3PathForFeeds": process.env.S3_PATH_FOR_FEEDS,
	"s3LikesPath": process.env.S3_LIKES_PATH,
	"urlNewsProducts": process.env.URL_NEWS_PRODUCTS,

	"maxRiverItems": 175,
	"maxNewFeedSubscriptions": 250,

	"flUpdateFeedsInBackground": true,
	"minSecsBetwFeedChecks": 15,

	"productName": "FeedLand",
	"productNameForDisplay": "FeedLand",

	"urlServerHomePageSource": "http://scripting.com/code/feedland/home/index.html",

	"flUseRiverCache": true,
    "ctSecsLifeRiverCache": 300,
    "legalTags": {
	    "allowedTags": [
		    "p", "br", "b", "i", "strong", "em", "h3", "blockquote", "ul", "ol", "li"
		    ],
	    "allowedAttributes": {}
	    }

	}
