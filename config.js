module.exports = {
	"whatIsThis": "A simple example config.json file for a FeedLand installation, with none of the extra features turned on.",
	
	"port": 1452,
	
	"flWebsocketEnabled": false,
	// "websocketPort": 1462,
	// "urlWebsocketServerForClient": "ws:/localhost:1462/",
	
	"myDomain": process.env.MY_DOMAIN,
	"urlFeedlandApp": process.env.URL_FEEDLAND_APP,
	
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
		"debug": false,
		"flLogQueries": false,
		"flQueueAllRequests": false,
		"flUseMySql2": true
		},
	
	"flUseTwitterIdentity": false,
	"flEnableNewUsers": true,
	"flBackupOnStartup": false,
	
	"flNewsProducts": false,
	"flUserFeeds": false,
	"flLikesFeeds": false,
	
	"urlForFeeds": "http://data.mydomain.com/feeds/",
	"s3PathForFeeds": "/data.mydomain.com/feeds/",
	"s3LikesPath": "/data.mydomain.com/likes/", 
	"urlNewsProducts": "http://newsproducts.mydomain.com",
	
	"maxRiverItems": 175,
	"maxNewFeedSubscriptions": 250,
	
	"flUpdateFeedsInBackground": true,
	"minSecsBetwFeedChecks": 15,
	
	"productName": "FeedLand",
	"productNameForDisplay": "FeedLand",
	
	"urlServerHomePageSource": "http://scripting.com/code/feedland/home/index.html",
	
	"flUseRiverCache": true,
	"ctSecsLifeRiverCache": 300,
	}
