import TweetResolver from './tweetResolvers';

export default {
	Query: {
		getTweets: TweetResolver.getTweets
	}
};
