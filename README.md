# nhs-antenatal-smoking
Number and percentage of mothers in Edinburgh reporting their smoking status at ante-natal booking visit in the community or at hospital.

Statistics provided by NHS Information Services Division:  http://statistics.gov.scot/data/smoking-at-booking

## License

Data is licensed under the Open Government License: http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/

## Requirements

- NodeJS
- npm

## Installation

Clone the repository

```
git clone https://github.com/EdinburghCityScope/nhs-antenatal-smoking.git
```

Install npm dependencies

```
cd nhs-antenatal-smoking
npm install
```

Run the API (from the nhs-antenatal-smoking directory)

```
node .
```

Converting the extracted data into loopback data.

```
node scripts/featureCollectionToLoopbackJson.js
```

Re-build data files from the statistics.gov.scot API

```
node scripts/build-data.js
```
