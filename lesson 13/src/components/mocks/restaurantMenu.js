export const restaurantMenu = {
	statusCode: 0,
	data: {
		statusMessage: 'done successfully',
		cards: [
			{
				card: {
					card: {
						'@type':
							'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
						info: {
							id: '325',
							name: 'Sree Krishna Kafe',
							city: 'Bangalore',
							slugs: {
								restaurant: 'sree-krishna-kafe-1st-block-koramangala',
								city: 'bangalore',
							},
							uniqueId: 'e51e6528-4859-48c8-8fed-e84c17dc2d76',
							cloudinaryImageId: 'us72sjlfo9opsmi8fi6u',
							locality: '5th Block',
							areaName: 'Koramangala',
							costForTwo: '13700',
							costForTwoMessage: '₹137 for two',
							cuisines: ['South Indian'],
							avgRating: 4.5,
							veg: true,
							feeDetails: {
								restaurantId: '325',
								fees: [
									{
										name: 'distance',
										fee: 3100,
									},
									{
										name: 'time',
									},
									{
										name: 'special',
									},
								],
								totalFee: 3100,
								icon: 'v1648635511/Delivery_fee_new_cjxumu',
								message: '0.6 kms | ₹31 Delivery fee will apply',
							},
							parentId: '898',
							avgRatingString: '4.5',
							totalRatingsString: '10K+ ratings',
							sla: {
								restaurantId: '325',
								deliveryTime: 16,
								minDeliveryTime: 16,
								maxDeliveryTime: 16,
								lastMileTravel: 0.6,
								serviceability: 'SERVICEABLE',
								stressFactor: 1,
								rainMode: 'RAIN_MODE_NONE',
								longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
								zoneId: 1,
								slaString: '16 MINS',
								lastMileTravelString: '0.6 km',
								iconType: 'ICON_TYPE_EMPTY',
							},
							availability: {
								nextCloseTime: '2023-11-11 11:15:00',
								visibility: true,
								opened: true,
								restaurantClosedMeta: {},
							},
							aggregatedDiscountInfo: {
								shortDescriptionList: [
									{
										discountType: 'Flat',
										operationType: 'RESTAURANT',
									},
									{
										discountType: 'Percentage',
										operationType: 'RESTAURANT',
									},
								],
								descriptionList: [
									{
										meta: 'Flat ₹75 off | Above ₹600',
										discountType: 'Flat',
										operationType: 'RESTAURANT',
									},
									{
										meta: '20% off upto ₹125 | Use BOBFEST Above ₹299',
										discountType: 'Percentage',
										operationType: 'RESTAURANT',
									},
								],
								visible: true,
							},
							badges: {},
							slugString: 'sree-krishna-kafe-1st-block-koramangala',
							multiOutlet: true,
							isOpen: true,
							labels: [
								{
									title: 'Timings',
									message: 'null',
								},
								{
									title: 'Address',
									message:
										'5th Main  Near Muni Reddy Kalyana Mantap Koramangala 5th Block  Bangalore',
								},
								{
									title: 'Cuisines',
									message: 'South Indian',
								},
							],
							totalRatings: 10000,
							aggregatedDiscountInfoV2: {
								shortDescriptionList: [
									{
										discountType: 'Flat',
										operationType: 'RESTAURANT',
									},
									{
										discountType: 'Percentage',
										operationType: 'RESTAURANT',
									},
								],
								descriptionList: [
									{
										meta: 'Flat ₹75 off | Above ₹600',
										discountType: 'Flat',
										operationType: 'RESTAURANT',
									},
									{
										meta: '20% off upto ₹125 | Use BOBFEST Above ₹299',
										discountType: 'Percentage',
										operationType: 'RESTAURANT',
									},
								],
								couponDetailsCta: 'View coupon details',
							},
							type: 'F',
							headerBanner: {
								url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/325',
							},
							expectationNotifiers: [
								{
									text: '0.6 kms | ₹31 Delivery fee will apply',
									icon: {
										imageId: 'v1648635511/Delivery_fee_new_cjxumu',
									},
									popup: {
										cta: {},
									},
									type: 'DISTANCE_FEE_NON_FOOD_LM',
									enrichedText: '<b>0.6 kms</b> | ₹31 Delivery fee will apply',
									halfCardPopup: {
										halfCardPopupHeader: {},
									},
								},
							],
							ratingSlab: 'RATING_SLAB_5',
							orderabilityCommunication: {
								title: {},
								subTitle: {},
								message: {},
								customIcon: {},
							},
							hasBestsellerItems: true,
							cartOrderabilityNudgeBanner: {
								parameters: {},
								presentation: {},
							},
							latLong: '12.93704,77.61952100000008',
						},
						analytics: {},
					},
					relevance: {
						type: 'RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD',
						sectionId: 'POP_UP_CROUTON_MENU',
					},
				},
			},
			{
				card: {
					card: {
						'@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
						layout: {
							rows: 1,
							columns: 5,
							horizontalScrollEnabled: true,
							itemSpacing: 12,
							lineSpacing: 10,
							widgetPadding: {},
							containerStyle: {
								containerPadding: {
									left: 10,
									right: 10,
									bottom: 16,
								},
							},
							scrollBar: {},
						},
						id: 'offerCollectionWidget_UX4',
						gridElements: {
							infoWithStyle: {
								'@type':
									'type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle',
								offers: [
									{
										info: {
											header: 'FLAT ₹75 OFF',
											offerTagColor: '#E46D47',
											logoBottom:
												'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
											offerIds: ['d1421eb2-25a1-449f-9b07-9c16494d06de'],
											expiryTime: '1970-01-01T00:00:00Z',
											couponCode: 'NO CODE REQUIRED',
											description: 'ABOVE ₹600',
											offerType: 'offers',
											restId: '325',
											offerLogo:
												'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
											descriptionTextColor: '#7302060C',
										},
										cta: {
											type: 'OFFER_HALF_CARD',
										},
									},
									{
										info: {
											header: 'FLAT ₹75 OFF',
											offerTagColor: '#E46D47',
											logoBottom:
												'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
											offerIds: ['ae66d213-f402-44c5-82aa-80b701816226'],
											expiryTime: '1970-01-01T00:00:00Z',
											couponCode: 'NO CODE REQUIRED',
											description: 'ABOVE ₹600',
											offerType: 'offers',
											restId: '325',
											offerLogo:
												'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
											descriptionTextColor: '#7302060C',
										},
										cta: {
											type: 'OFFER_HALF_CARD',
										},
									},
									{
										info: {
											header: 'FLAT ₹50 OFF',
											offerTagColor: '#E46D47',
											logoBottom:
												'rng/md/ads/production/5c4848f8c208408b048c18f6be604f14',
											offerIds: ['3bea9ef2-b96e-4267-a8f7-2fee812fdb40'],
											expiryTime: '1970-01-01T00:00:00Z',
											couponCode: 'NO CODE REQUIRED',
											description: 'ABOVE ₹499',
											offerType: 'offers',
											restId: '325',
											offerLogo:
												'rng/md/ads/production/5c4848f8c208408b048c18f6be604f14',
											descriptionTextColor: '#7302060C',
										},
										cta: {
											type: 'OFFER_HALF_CARD',
										},
									},
									{
										info: {
											header: '20% OFF UPTO ₹125',
											offerTagColor: '#E46D47',
											logoBottom:
												'rng/md/ads/production/41883e85327a5a799d45d9b95f3510a3',
											offerIds: ['49e2c1e9-c4a0-494e-b8e7-d18a6d138138'],
											expiryTime: '1970-01-01T00:00:00Z',
											couponCode: 'USE BOBFEST',
											description: 'ABOVE ₹299',
											offerType: 'offers',
											restId: '325',
											offerLogo:
												'rng/md/ads/production/41883e85327a5a799d45d9b95f3510a3',
											descriptionTextColor: '#7302060C',
										},
										cta: {
											type: 'OFFER_HALF_CARD',
										},
									},
									{
										info: {
											header: '15% OFF UPTO ₹300',
											offerTagColor: '#E46D47',
											logoBottom:
												'rng/md/ads/production/15fb1cfe885005447dc8375e7970600f',
											offerIds: ['550c1f2e-9964-49d3-9bba-49997fe73e44'],
											expiryTime: '1970-01-01T00:00:00Z',
											couponCode: 'USE CITIFOODIE',
											description: 'ABOVE ₹1200',
											offerType: 'offers',
											restId: '325',
											offerLogo:
												'rng/md/ads/production/15fb1cfe885005447dc8375e7970600f',
											descriptionTextColor: '#7302060C',
										},
										cta: {
											type: 'OFFER_HALF_CARD',
										},
									},
								],
								habitMilestoneInfo: {
									callout: {},
								},
							},
						},
					},
				},
			},
			{
				groupedCard: {
					cardGroupMap: {
						REGULAR: {
							cards: [
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
											isPureVeg: true,
											badges: {},
											vegOnlyDetails: {
												imageId: 'AutoVegOnly_qkjowj',
												title: 'Showing only vegetarian options.',
												description:
													'Tap on the VEG ONLY button to turn off the setting',
											},
											topRatedFilter: {},
											kidsCategoryFilter: {
												attributes: {
													displayText: 'Kids Category',
													tooltip: {
														enabled: true,
														displayText:
															'Kids Category Filter applied. Remove this filter to see the full Menu.',
													},
												},
											},
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
											title: 'Recommended',
											itemCards: [
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925814',
															name: 'Upma (250 Gms)',
															category: 'Breakfast',
															description: 'Medium Spicy',
															imageId: 'inumxbqcxvm1corppf0w',
															inStock: 1,
															isVeg: 1,
															price: 11000,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
															},
															ribbon: {
																text: 'Bestseller',
																textColor: '#ffffff',
																topBackgroundColor: '#d53d4c',
																bottomBackgroundColor: '#b02331',
															},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															isBestseller: true,
															ratings: {
																aggregatedRating: {
																	rating: '4.6',
																	ratingCount: '2327 ratings',
																	ratingCountV2: '2327',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925836',
															name: 'Onion Uttapam (Breakfast) ',
															category: 'Breakfast',
															description:
																'Medium Spicy | Comes with Served with chutney and sambhar | Serves 1 | An authentic south Indian dish prepared with soft uttapam topped with onions.',
															imageId: 'fd0s7ireuuzuzj883sut',
															inStock: 1,
															isVeg: 1,
															price: 12800,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																accompaniments:
																	'Served with Served with chutney and sambhar',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.5',
																	ratingCount: '1278 ratings',
																	ratingCountV2: '1278',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925828',
															name: 'Podi Masala Dosa (Breakfast)',
															category: 'Breakfast',
															description:
																'Medium Spicy | Comes with Served with chutney | Serves 1 | An authentic south Indian dish prepared with golden crispy dosa smeared with gun powder and ghee',
															imageId: 'pma842sclqdyewsfveho',
															inStock: 1,
															isVeg: 1,
															price: 17500,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																accompaniments:
																	'Served with Served with chutney',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.7',
																	ratingCount: '640 ratings',
																	ratingCountV2: '640',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925845',
															name: 'Onion Masala Dosa (Breakfast)',
															category: 'Breakfast',
															description:
																'Serves 1 | Crispy and delicious dosa folded in with masala and topped with onions.',
															imageId: 'ivhc95ba0gaglero3mfa',
															inStock: 1,
															isVeg: 1,
															price: 14800,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.6',
																	ratingCount: '528 ratings',
																	ratingCountV2: '528',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925832',
															name: 'Ghee Roast Dosa',
															category: 'Breakfast',
															description: 'Medium Spicy | Serves 1',
															imageId: 'gv2uufiqhzdu0tlnu9ur',
															inStock: 1,
															isVeg: 1,
															price: 15300,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																portionSize: 'Serves 1',
															},
															ribbon: {
																text: 'Bestseller',
																textColor: '#ffffff',
																topBackgroundColor: '#d53d4c',
																bottomBackgroundColor: '#b02331',
															},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															isBestseller: true,
															ratings: {
																aggregatedRating: {
																	rating: '4.6',
																	ratingCount: '2529 ratings',
																	ratingCountV2: '2529',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925827',
															name: 'Masala Dosa (Breakfast)',
															category: 'Breakfast',
															description:
																'Medium Spicy | Comes with Served with chutney and sambar | Serves 1 | Crispy and tasty rice pancake made with ghee packed with a delicious potato masala',
															imageId: 'pgcihyqltzdafiw1nog5',
															inStock: 1,
															isVeg: 1,
															price: 12500,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																accompaniments:
																	'Served with Served with chutney and sambar',
																portionSize: 'Serves 1',
															},
															ribbon: {
																text: 'Bestseller',
																textColor: '#ffffff',
																topBackgroundColor: '#d53d4c',
																bottomBackgroundColor: '#b02331',
															},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															isBestseller: true,
															ratings: {
																aggregatedRating: {
																	rating: '4.5',
																	ratingCount: '4156 ratings',
																	ratingCountV2: '4156',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925837',
															name: 'Onion Podi Uttapam ',
															category: 'Breakfast',
															description:
																'Medium Spicy | Serves 1 | South Indian style pancake with exotic filling of assorted veggies and chutney podi sprinkled on the top.',
															imageId: 'ioaudee3ijqn47qfv0zk',
															inStock: 1,
															isVeg: 1,
															price: 16300,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.6',
																	ratingCount: '1105 ratings',
																	ratingCountV2: '1105',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925825',
															name: 'Plain Dosa (Breakfast)',
															category: 'Breakfast',
															description: 'Medium Spicy | Serves 1',
															imageId: 'czd3pvfsauokpbmorgxb',
															inStock: 1,
															isVeg: 1,
															price: 11100,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																portionSize: 'Serves 1',
															},
															ribbon: {
																text: 'Bestseller',
																textColor: '#ffffff',
																topBackgroundColor: '#d53d4c',
																bottomBackgroundColor: '#b02331',
															},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															isBestseller: true,
															ratings: {
																aggregatedRating: {
																	rating: '4.5',
																	ratingCount: '2036 ratings',
																	ratingCountV2: '2036',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925838',
															name: 'Rava Dosa (Breakfast)',
															category: 'Breakfast',
															description: 'Medium Spicy | Serves 1',
															imageId: 'bovk8ro5okqns1jrkje5',
															inStock: 1,
															isVeg: 1,
															price: 11800,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.5',
																	ratingCount: '1315 ratings',
																	ratingCountV2: '1315',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925839',
															name: 'Rava Masala Dosa (Breakfast)',
															category: 'Breakfast',
															description: 'Serves 1',
															imageId: 'hgsaqmdw9aimjklsr18s',
															inStock: 1,
															isVeg: 1,
															price: 13900,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.2',
																	ratingCount: '405 ratings',
																	ratingCountV2: '405',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '102965672',
															name: 'Paper Masala Dosa',
															category: 'Breakfast',
															description: 'Serves 1',
															imageId: 'kwpvwa7yaqzrpzc4o41d',
															inStock: 1,
															isVeg: 1,
															price: 18000,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '5.0',
																	ratingCount: '11 ratings',
																	ratingCountV2: '11',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925821',
															name: 'Mini Idli Sambar (2 Pcs)',
															category: 'Breakfast',
															description: 'Medium Spicy | Serves 1',
															imageId: 'yy9ok9arth53fy3ezzvv',
															inStock: 1,
															isVeg: 1,
															price: 12200,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																portionSize: 'Serves 1',
															},
															ribbon: {
																text: 'Bestseller',
																textColor: '#ffffff',
																topBackgroundColor: '#d53d4c',
																bottomBackgroundColor: '#b02331',
															},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															isBestseller: true,
															ratings: {
																aggregatedRating: {
																	rating: '4.5',
																	ratingCount: '3710 ratings',
																	ratingCountV2: '3710',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925820',
															name: 'Single Idli (1 Pc) ',
															category: 'Breakfast',
															description: 'Medium Spicy',
															imageId: 'rc2ylkpzsprzizj1rygq',
															inStock: 1,
															isVeg: 1,
															price: 4600,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.7',
																	ratingCount: '1184 ratings',
																	ratingCountV2: '1184',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925819',
															name: 'Idli ( 2 Pcs )',
															category: 'Breakfast',
															description: 'Medium Spicy',
															imageId: 'fcm9y3893mzxpryn03n1',
															inStock: 1,
															isVeg: 1,
															price: 7900,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
															},
															ribbon: {
																text: 'Bestseller',
																textColor: '#ffffff',
																topBackgroundColor: '#d53d4c',
																bottomBackgroundColor: '#b02331',
															},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															isBestseller: true,
															ratings: {
																aggregatedRating: {
																	rating: '4.5',
																	ratingCount: '11081 ratings',
																	ratingCountV2: '11081',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '925823',
															name: 'Sambar Vada (2 Pcs)',
															category: 'Breakfast',
															description: 'Medium Spicy | Serves 1',
															imageId: 'nxz8hj6yneupyqz1efsi',
															inStock: 1,
															isVeg: 1,
															price: 9000,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															showImage: true,
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.5',
																	ratingCount: '2150 ratings',
																	ratingCountV2: '2150',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
											],
											type: 'CATEGORY_TYPE_RECOMMENDED',
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
											title: 'Breakfast',
											categories: [
												{
													title: 'Veg',
													itemCards: [
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925814',
																	name: 'Upma (250 Gms)',
																	category: 'Breakfast',
																	description: 'Medium Spicy',
																	imageId: 'inumxbqcxvm1corppf0w',
																	inStock: 1,
																	isVeg: 1,
																	price: 11000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '2327 ratings',
																			ratingCountV2: '2327',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925818',
																	name: 'Gulab Jamun (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	imageId: 'fuqcu94741ueyemxaemb',
																	inStock: 1,
																	isVeg: 1,
																	price: 3800,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.4',
																			ratingCount: '512 ratings',
																			ratingCountV2: '512',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '61432826',
																	name: 'Fresh Idli /dosa Batter 500gms',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 9300,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '114 ratings',
																			ratingCountV2: '114',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '84828787',
																	name: 'S K Foods Ribbon Pakoda (140 Gms)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 10500,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '7 ratings',
																			ratingCountV2: '7',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '84828901',
																	name: 'Coconut Burfi (240 Gms)',
																	category: 'Breakfast',
																	inStock: 1,
																	isVeg: 1,
																	price: 16900,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '14 ratings',
																			ratingCountV2: '14',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102964797',
																	name: 'Poori Masala   ',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 8800,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.3',
																			ratingCount: '87 ratings',
																			ratingCountV2: '87',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925813',
																	name: 'Pongal (250 Gms)',
																	category: 'Breakfast',
																	description: 'Medium Spicy',
																	imageId: 'snqr2mtk5trydx4nvgk4',
																	isVeg: 1,
																	price: 12000,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.4',
																			ratingCount: '2383 ratings',
																			ratingCountV2: '2383',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
													],
												},
												{
													title: 'Dosas',
													itemCards: [
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925836',
																	name: 'Onion Uttapam (Breakfast) ',
																	category: 'Breakfast',
																	description:
																		'Medium Spicy | Comes with Served with chutney and sambhar | Serves 1 | An authentic south Indian dish prepared with soft uttapam topped with onions.',
																	imageId: 'fd0s7ireuuzuzj883sut',
																	inStock: 1,
																	isVeg: 1,
																	price: 12800,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		accompaniments:
																			'Served with Served with chutney and sambhar',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '1278 ratings',
																			ratingCountV2: '1278',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925828',
																	name: 'Podi Masala Dosa (Breakfast)',
																	category: 'Breakfast',
																	description:
																		'Medium Spicy | Comes with Served with chutney | Serves 1 | An authentic south Indian dish prepared with golden crispy dosa smeared with gun powder and ghee',
																	imageId: 'pma842sclqdyewsfveho',
																	inStock: 1,
																	isVeg: 1,
																	price: 17500,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		accompaniments:
																			'Served with Served with chutney',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '640 ratings',
																			ratingCountV2: '640',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925826',
																	name: 'Podi Dosa (Breakfast)',
																	category: 'Breakfast',
																	description:
																		'Medium Spicy | Serves 1 | A delightfully flavorful and mouthwatering podi layered dosa served with chutney and sambhar.',
																	inStock: 1,
																	isVeg: 1,
																	price: 15300,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '850 ratings',
																			ratingCountV2: '850',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925831',
																	name: 'Onion Dosa ',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 13000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '257 ratings',
																			ratingCountV2: '257',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925833',
																	name: 'Ghee Masala Dosa (Breakfast)',
																	category: 'Breakfast',
																	description:
																		'Medium Spicy | Serves 1 | Golden crispy and delicious dosa, folded in with potato masala and coasted with fresh butter.',
																	imageId: 'caxne9ilpsnqecfvq7cb',
																	inStock: 1,
																	isVeg: 1,
																	price: 16500,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '2905 ratings',
																			ratingCountV2: '2905',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925834',
																	name: 'Uttapam (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 11100,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.8',
																			ratingCount: '240 ratings',
																			ratingCountV2: '240',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925835',
																	name: 'Podi Uttapam (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 15300,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '128 ratings',
																			ratingCountV2: '128',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925840',
																	name: 'Onion Rava Dosa (Breakfast)',
																	category: 'Breakfast',
																	description:
																		'Serves 1 | Crispy dosa made from a mix of rice batter and rava, topped with onions.',
																	inStock: 1,
																	isVeg: 1,
																	price: 15000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '341 ratings',
																			ratingCountV2: '341',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925842',
																	name: 'Ghee Rava Dosa (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 15300,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '103 ratings',
																			ratingCountV2: '103',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925843',
																	name: 'Special Rava Dosa (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 16000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.4',
																			ratingCount: '94 ratings',
																			ratingCountV2: '94',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925844',
																	name: 'Chennai Special Dosa (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 16000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.3',
																			ratingCount: '213 ratings',
																			ratingCountV2: '213',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925845',
																	name: 'Onion Masala Dosa (Breakfast)',
																	category: 'Breakfast',
																	description:
																		'Serves 1 | Crispy and delicious dosa folded in with masala and topped with onions.',
																	imageId: 'ivhc95ba0gaglero3mfa',
																	inStock: 1,
																	isVeg: 1,
																	price: 14800,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '528 ratings',
																			ratingCountV2: '528',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925832',
																	name: 'Ghee Roast Dosa',
																	category: 'Breakfast',
																	description: 'Medium Spicy | Serves 1',
																	imageId: 'gv2uufiqhzdu0tlnu9ur',
																	inStock: 1,
																	isVeg: 1,
																	price: 15300,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '2529 ratings',
																			ratingCountV2: '2529',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925827',
																	name: 'Masala Dosa (Breakfast)',
																	category: 'Breakfast',
																	description:
																		'Medium Spicy | Comes with Served with chutney and sambar | Serves 1 | Crispy and tasty rice pancake made with ghee packed with a delicious potato masala',
																	imageId: 'pgcihyqltzdafiw1nog5',
																	inStock: 1,
																	isVeg: 1,
																	price: 12500,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		accompaniments:
																			'Served with Served with chutney and sambar',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '4156 ratings',
																			ratingCountV2: '4156',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925837',
																	name: 'Onion Podi Uttapam ',
																	category: 'Breakfast',
																	description:
																		'Medium Spicy | Serves 1 | South Indian style pancake with exotic filling of assorted veggies and chutney podi sprinkled on the top.',
																	imageId: 'ioaudee3ijqn47qfv0zk',
																	inStock: 1,
																	isVeg: 1,
																	price: 16300,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '1105 ratings',
																			ratingCountV2: '1105',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925825',
																	name: 'Plain Dosa (Breakfast)',
																	category: 'Breakfast',
																	description: 'Medium Spicy | Serves 1',
																	imageId: 'czd3pvfsauokpbmorgxb',
																	inStock: 1,
																	isVeg: 1,
																	price: 11100,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '2036 ratings',
																			ratingCountV2: '2036',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925838',
																	name: 'Rava Dosa (Breakfast)',
																	category: 'Breakfast',
																	description: 'Medium Spicy | Serves 1',
																	imageId: 'bovk8ro5okqns1jrkje5',
																	inStock: 1,
																	isVeg: 1,
																	price: 11800,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '1315 ratings',
																			ratingCountV2: '1315',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925839',
																	name: 'Rava Masala Dosa (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	imageId: 'hgsaqmdw9aimjklsr18s',
																	inStock: 1,
																	isVeg: 1,
																	price: 13900,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.2',
																			ratingCount: '405 ratings',
																			ratingCountV2: '405',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925841',
																	name: 'Onion Rava Masala (Breakfast)',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 14800,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '3.5',
																			ratingCount: '186 ratings',
																			ratingCountV2: '186',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102965658',
																	name: 'Paper Roast Dosa',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 17000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '5.0',
																			ratingCount: '8 ratings',
																			ratingCountV2: '8',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102965672',
																	name: 'Paper Masala Dosa',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	imageId: 'kwpvwa7yaqzrpzc4o41d',
																	inStock: 1,
																	isVeg: 1,
																	price: 18000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '5.0',
																			ratingCount: '11 ratings',
																			ratingCountV2: '11',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '126875424',
																	name: 'Small.onion Oothappa',
																	category: 'Breakfast',
																	inStock: 1,
																	isVeg: 1,
																	price: 18000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
													],
												},
												{
													title: 'Idlis & Vadas',
													itemCards: [
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925821',
																	name: 'Mini Idli Sambar (2 Pcs)',
																	category: 'Breakfast',
																	description: 'Medium Spicy | Serves 1',
																	imageId: 'yy9ok9arth53fy3ezzvv',
																	inStock: 1,
																	isVeg: 1,
																	price: 12200,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '3710 ratings',
																			ratingCountV2: '3710',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925820',
																	name: 'Single Idli (1 Pc) ',
																	category: 'Breakfast',
																	description: 'Medium Spicy',
																	imageId: 'rc2ylkpzsprzizj1rygq',
																	inStock: 1,
																	isVeg: 1,
																	price: 4600,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '1184 ratings',
																			ratingCountV2: '1184',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925819',
																	name: 'Idli ( 2 Pcs )',
																	category: 'Breakfast',
																	description: 'Medium Spicy',
																	imageId: 'fcm9y3893mzxpryn03n1',
																	inStock: 1,
																	isVeg: 1,
																	price: 7900,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '11081 ratings',
																			ratingCountV2: '11081',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925822',
																	name: 'Vada',
																	category: 'Breakfast',
																	description: 'Medium Spicy | 1 piece',
																	imageId: 'vfrvt8rkzerms6qizff6',
																	inStock: 1,
																	isVeg: 1,
																	price: 6400,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: '1 piece',
																	},
																	ribbon: {
																		text: 'Bestseller',
																		textColor: '#ffffff',
																		topBackgroundColor: '#d53d4c',
																		bottomBackgroundColor: '#b02331',
																	},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	isBestseller: true,
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '6997 ratings',
																			ratingCountV2: '6997',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925823',
																	name: 'Sambar Vada (2 Pcs)',
																	category: 'Breakfast',
																	description: 'Medium Spicy | Serves 1',
																	imageId: 'nxz8hj6yneupyqz1efsi',
																	inStock: 1,
																	isVeg: 1,
																	price: 9000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '2150 ratings',
																			ratingCountV2: '2150',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925824',
																	name: 'Curd Vada',
																	category: 'Breakfast',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 9500,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '336 ratings',
																			ratingCountV2: '336',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '106546652',
																	name: 'Idiyappam Kurma And Coconut Milk',
																	category: 'Breakfast',
																	isVeg: 1,
																	price: 14800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '45 ratings',
																			ratingCountV2: '45',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
													],
												},
											],
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
											title: 'Evening Specials',
											categories: [
												{
													title: 'Tiffins',
													itemCards: [
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '61332518',
																	name: 'Fresh Idli / Dosa Batter 1 Kg ',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	inStock: 1,
																	isVeg: 1,
																	price: 18000,
																	variants: {},
																	variantsV2: {},
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.8',
																			ratingCount: '72 ratings',
																			ratingCountV2: '72',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102965198',
																	name: 'Podi Idli',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 12100,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.7',
																			ratingCount: '14 ratings',
																			ratingCountV2: '14',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102965202',
																	name: 'Sambar Vadai',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	imageId: 'aqwqrgqtwtwblsydlflj',
																	isVeg: 1,
																	price: 9000,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.9',
																			ratingCount: '8 ratings',
																			ratingCountV2: '8',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102965549',
																	name: 'Curd Vadai  ',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 9500,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.8',
																			ratingCount: '9 ratings',
																			ratingCountV2: '9',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102965615',
																	name: 'Chilli Idly  ',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 12800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '64434611',
																	name: 'Idiyappam Kurma Coconut Milk',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 14800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.2',
																			ratingCount: '143 ratings',
																			ratingCountV2: '143',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '99391002',
																	name: 'Fried Idly Sambar',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 14200,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '5.0',
																			ratingCount: '4 ratings',
																			ratingCountV2: '4',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '102965740',
																	name: 'Onion Vada',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 6400,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.1',
																			ratingCount: '16 ratings',
																			ratingCountV2: '16',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '107056037',
																	name: 'Kyma Idli',
																	category: 'Evening Specials',
																	isVeg: 1,
																	price: 12800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '107056039',
																	name: 'Poori',
																	category: 'Evening Specials',
																	isVeg: 1,
																	price: 8800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.3',
																			ratingCount: '19 ratings',
																			ratingCountV2: '19',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '107056049',
																	name: 'Chilli Parota',
																	category: 'Evening Specials',
																	isVeg: 1,
																	price: 12600,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '2.8',
																			ratingCount: '3 ratings',
																			ratingCountV2: '3',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '61332523',
																	name: 'Limited Meals Evening',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 21000,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '13 ratings',
																			ratingCountV2: '13',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '99390997',
																	name: 'Kothu Parota',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 12800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '3.9',
																			ratingCount: '10 ratings',
																			ratingCountV2: '10',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '99391000',
																	name: 'Kyma Parota',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 11700,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.5',
																			ratingCount: '3 ratings',
																			ratingCountV2: '3',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '99391001',
																	name: 'Chilli Idli',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	imageId: 'ajqzzexgup5heyxxl5wi',
																	isVeg: 1,
																	price: 12800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '3.5',
																			ratingCount: '3 ratings',
																			ratingCountV2: '3',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '99391004',
																	name: 'Poori Masalaa',
																	category: 'Evening Specials',
																	description: 'Serves 1',
																	isVeg: 1,
																	price: 8800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.8',
																			ratingCount: '20 ratings',
																			ratingCountV2: '20',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
													],
												},
												{
													title: 'Satuary Day',
													itemCards: [
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '107064626',
																	name: 'Kozhukkattai Sweet',
																	category: 'Evening Specials',
																	isVeg: 1,
																	price: 9200,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '29 ratings',
																			ratingCountV2: '29',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '107064685',
																	name: 'Adai Avail',
																	category: 'Evening Specials',
																	isVeg: 1,
																	price: 12300,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '107065224',
																	name: 'Pongal ',
																	category: 'Evening Specials',
																	imageId: 'snqr2mtk5trydx4nvgk4',
																	isVeg: 1,
																	price: 12000,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 6 pm, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
													],
												},
											],
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
											title: 'Beverages',
											itemCards: [
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '2685015',
															name: 'Butter Milk (200 ml)',
															category: 'Beverages',
															description: 'Medium Spicy | Serves 1',
															inStock: 1,
															isVeg: 1,
															price: 4100,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																spiceLevel: 'MEDIUMSPICY',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															type: 'ITEM',
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.6',
																	ratingCount: '857 ratings',
																	ratingCountV2: '857',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
											],
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
											title: 'Accompaniment',
											itemCards: [
												{
													card: {
														'@type':
															'type.googleapis.com/swiggy.presentation.food.v2.Dish',
														info: {
															id: '2685014',
															name: 'Curd',
															category: 'Accompaniment',
															description: 'Serves 1',
															inStock: 1,
															isVeg: 1,
															price: 3600,
															variants: {},
															variantsV2: {},
															itemAttribute: {
																vegClassifier: 'VEG',
																portionSize: 'Serves 1',
															},
															ribbon: {},
															type: 'ITEM',
															itemBadge: {},
															badgesV2: {},
															ratings: {
																aggregatedRating: {
																	rating: '4.4',
																	ratingCount: '140 ratings',
																	ratingCountV2: '140',
																},
															},
														},
														analytics: {},
														hideRestaurantDetails: true,
													},
												},
											],
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
											title: 'Lunch',
											categories: [
												{
													title: 'Meals',
													itemCards: [
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '59316129',
																	name: 'Rice,sambar,rasam (250 Gms)',
																	category: 'Lunch',
																	description: 'Medium Spicy | Serves 1',
																	isVeg: 1,
																	price: 9800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 12 noon, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.2',
																			ratingCount: '114 ratings',
																			ratingCountV2: '114',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '110943814',
																	name: 'Special Meals (sat &sun)',
																	category: 'Lunch',
																	isVeg: 1,
																	price: 41900,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 12 noon, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.8',
																			ratingCount: '64 ratings',
																			ratingCountV2: '64',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '59316985',
																	name: 'Chappathi Kurma',
																	category: 'Lunch',
																	description: 'Serves 1',
																	imageId: 'yor9qqs0ao8qrwln4uyt',
																	isVeg: 1,
																	price: 9500,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 12 noon, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '54 ratings',
																			ratingCountV2: '54',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '59315011',
																	name: 'Parota Kurma',
																	category: 'Lunch',
																	description: 'Medium Spicy | Serves 1',
																	imageId: 'zetfgzouait0jpice1ih',
																	isVeg: 1,
																	price: 10300,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 12 noon, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.3',
																			ratingCount: '98 ratings',
																			ratingCountV2: '98',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '56873723',
																	name: 'Limited Meals',
																	category: 'Lunch',
																	description:
																		'Medium Spicy | Serves 1 | White rice, sambhar, rasam, curd curry, poriyal, kootu, chappathi, kurma, curd, appalam',
																	imageId: 'olpyl2ugahxt8r3xaelj',
																	isVeg: 1,
																	price: 24800,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 12 noon, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.3',
																			ratingCount: '467 ratings',
																			ratingCountV2: '467',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '925879',
																	name: 'Regular Meals',
																	category: 'Lunch',
																	description:
																		'Medium Spicy | Serves 1 | Monday To Friday.',
																	imageId: 'ikxdz1pujaqfnfbi9mpg',
																	isVeg: 1,
																	price: 37500,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 12 noon, today',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																		spiceLevel: 'MEDIUMSPICY',
																		portionSize: 'Serves 1',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {
																			rating: '4.6',
																			ratingCount: '1590 ratings',
																			ratingCountV2: '1590',
																		},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
														{
															card: {
																'@type':
																	'type.googleapis.com/swiggy.presentation.food.v2.Dish',
																info: {
																	id: '108068012',
																	name: 'Special Meals Sunday',
																	category: 'Lunch',
																	isVeg: 1,
																	price: 36200,
																	variants: {},
																	variantsV2: {},
																	nextAvailableAtMessage:
																		'Next available at 7:30 am, tomorrow',
																	itemAttribute: {
																		vegClassifier: 'VEG',
																	},
																	ribbon: {},
																	type: 'ITEM',
																	itemBadge: {},
																	badgesV2: {},
																	ratings: {
																		aggregatedRating: {},
																	},
																},
																analytics: {},
																hideRestaurantDetails: true,
															},
														},
													],
												},
											],
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
											type: 'FSSAI',
											imageId: 'fssai_final_edss9i',
											text: ['License No. 11214334001267'],
										},
									},
								},
								{
									card: {
										card: {
											'@type':
												'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
											name: 'Sree Krishna Kafe',
											area: 'Koramangala',
											completeAddress:
												'5th Main  Near Muni Reddy Kalyana Mantap Koramangala 5th Block  Bangalore',
										},
									},
								},
							],
						},
					},
				},
			},
		],
		firstOffsetRequest: true,
		isQCLink: false,
	},
	tid: 'de59d298-5113-49c2-b6f0-ce7625b95fd7',
	sid: 'aea9cb28-dc4f-4634-953a-9f1a55a66dbc',
	deviceId: 'befd0381-127d-7211-60a5-e1f8cb7cecc3',
	csrfToken: 'zSf8QfcHqEen-F8pNe8x3rJmnVZWRqwEfG3Lk9OQ',
}
