---
layout: post
title:  "Multiple categories for Jekyll posts"
date:   2017-12-05 09:11:03
thumb: 2.jpg
categories: [jekyll]
---

If you want to be able to assign posts to multiple categories in Jekyll, here’s one way to do it.

In your YAML front matter, you can provide a list of categories like that:

categories: [math, cs]

Of course, after that you want to, say, view all posts categorized as math on a page that has category: math. However, your natural first guess - filter all posts where post.categories contains “math” - won’t work because of liquid’s peculiarities (essentially, there’s no nice way to filter the elements of a list according to a condition). So what I did instead is the following (slightly ugly) hack:

The theory was first published in 2005 a press released under the name of Cliff Arnall, who at the time was a tutor at the Centre for Lifelong Learning – a Further Education centre associated with Cardiff University. Later, however, the Guardian printed a statement from the university distancing itself from the psychology professor: “Cardiff University asked us to point out that Cliff Arnall… was a former part-time tutor at the university but left in February.

The third Monday of January is supposed to be the most depressing day of the year. Whether you believe that or not, the long nights, cold weather and trying to keep to new year resolutions are all probably getting to you a little by now. To make matters worse many will still be recovering from their Christmas spending

So how can you make today – and the rest of January – a little better for you and your wallet? Well, if times are tight, a little extra in your pocket should make the month more bearable. Here are four easy ways to do just that.

You can make some quick cash by switching your bank account to one with a bonus. Some banks are giving away £150 for moving your custom, while others offer cashback or high interest. Of course it’s worth checking you won’t lose out in other ways such as high overdraft fees. If you’re likely to go into the red you might be better off switching to a bank with lower fees or even a small interest free overdraft.

Did you decide to stop smoking this year? Or was it drinking for a month? Whatever your resolution don’t just think about the health benefits as it could also be helping your bank balance. The average smoker lights up 12 cigarettes a day, adding up to nearly £150 in January. Having five less pints of beer or glasses of wine each week could easily save you £100 this month.

The sales are still on, and with the temperatures dropping there’s probably the temptation to kit yourself out in a new jumper or winter coat. Well if you’ve got some old woollies down the back of the wardrobe, there’s a good chance your friends do too. Getting a group of you together to swap clothes means you’re getting a new look for free, adding some extra pounds to your purse to save or spend elsewhere.

You can make some quick cash by switching your bank account to one with a bonus. Some banks are giving away £150 for moving your custom, while others offer cashback or high interest. Of course it’s worth checking you won’t lose out in other ways such as high overdraft fees. If you’re likely to go into the red you might be better off switching to a bank with lower fees or even a small interest free overdraft.


Did you decide to stop smoking this year? Or was it drinking for a month? Whatever your resolution don’t just think about the health benefits as it could also be helping your bank balance. The average smoker lights up 12 cigarettes a day, adding up to nearly £150 in January. Having five less pints of beer or glasses of wine each week could easily save you £100 this month.”
