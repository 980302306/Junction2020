# Junction2020-WeMeat

## Challenge Description:

*At HKScan, we have noticed that the food industry must provide consumers with more accurate and open data. We will increase `transparency` in a consumer-friendly and fact-based way. So that our meat doesn’t only please your taste buds, but also your heart and `conscience`.*

*HKScan has unique data from the whole, long value chain, from farm to fork. Using this information, HKScan is motivated in building solutions to `make the production chain more transparent` for consumers, customers and/or other stakeholders.*

## Insights

Figure out what kind of meaningful and engaging services HKScan could build with the data to benefit consumers, customers, and/or other stakeholders.

Teams will be provided with data sets for CO2e, water and animal welfare footprints. In need of other data, let us know, and we might be able to share it to you. We are also bringing mentors with expertise from all parts of the value chain.

Here’s the [link](https://github.com/hackjunction/hkscanmaterials) to all data that could be relevant for the challenge.

## Background:

The food industry is changing rapidly. The good taste of food is not enough, customers are more and more concern about the origin of the safety of raw materials, sustainability, responsibility, animal welfare and environmental impacts of food production. As a responsible food company, HKScan has taken on actions on animal welfare and environmental protection. However, how to engage more stakeholders into the food production process and build a transparent system is still an unsolved problem.

## Methods

### Demonstration the data from farm to fork

We first studied the technology HKScan has adopted in their animal breeding process. We found four important criteria, which are good feeding, good housing, good health, appropriate behaviour together with carbon footprint and water footprint. Furthermore, we extended these criteria into multiple questions, we assume that all data related to the questions are available, some of them are below:

- Eat how much food(kg) and drink how much water(m³) on average per animal per day?
- Average square(m²) of rest areas per animal?
- What are the temperature(℃) and humidity(g/kg) conditions of the living environment?
- How many hours sleeping(h) the animal has on average?
- What is the cleanness condition of living space of animals?
- How many injuries and diseases does the animal have in total during whole life?
- Is the height and weight of the animal in normal size?
- How many days are the animal in different moods? such as happy, fear, relax, frustrated.
- Is the animal has a good relationship with humans?

To engage the customers, we studied the life cycle of cows and build a 'timeline' of cows' life. In each stage of cow's life, there is a criterion of animal welfare presented to convince consumers that our products are healthy and reliable and to let the public know that we are doing a certain amount of work in animal welfare.

Besides, we have another module to introduce the CO2 and water footprint to introduce the working have been done in HKScan to create a more eco-friendly food industry.

###  Extracting information from consumers feedback

We designed a food package with a QR code linked to the feedback questionnaire on the surface, which is an excellent interface for interacting with consumers. After consumers cooking and eating our products, they can give us timely feedback by simply scanning the QR code and answers the questions. Some of the questions are below:

- Where did you buy this product, in which market?
- Give a score appraisal from 0 to 5 to the product's taste, freshness and so on.
- Do you want to buy this product again?

After gaining the data from customers, we input the data to our NLP Semantic analysis and sentiment analysis model(not realized yet) and then magic happens, AI suggestions make our products better by the powerful learning ability of the deep neural network.

## About the Codes

- Implented a [website](https://floating-cove-56114.herokuapp.com/) based on React.js, node.js
- All important codes are in `/src` directory.
  - fontStyle: .tff files for font style
  - Components: All components on our website.
  - Img: All images used on our website.
  - Service: One simple request.