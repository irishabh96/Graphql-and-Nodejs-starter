import Tweets from '../../models/Tweets';

export default {
	getTweets: () => Tweets.find({})
};
