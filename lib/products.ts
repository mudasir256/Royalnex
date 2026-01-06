// Product data with real images from public folder

export const productImages = {
  'soccer-balls': [
    '/ball.jpg',
    '/ball1.jpg',
    '/ball2.jpg.jpg',
    '/azorean_game_ball-1024x747.jpg',
    '/143_1699084541_6545f8fdf1a16_19677_516_1652343151_627cc16f16fc3-598130962610.jpg',
    '/397_1699084541_6545f8fdb15a8_19677_384_1652343151_627cc16f2cdce-596200268903.jpg',
    '/919_1702030786_6572edc240e66_ab-808-black-1_1700553744-878724799746.jpg',
    '/ab-835-blue-1-1700554251_1705055820-1601611644531.jpg',
    '/514046455_24224097477226456_3821855265287422899_n.jpg',
    '/586095274-400x300.jpeg',
    '/588114135-400x300.jpeg',
    '/590166417-400x300.jpeg',
    '/7587cc851ee8cc315089feeb6a10b766-1.jpg',
    '/IA0972_1_1708325310-508240117705.jpg',
  ],
  'rugby-balls': [
    '/Rugdy1.jpg',
    '/Rugdy2.jpg',
    '/Rugdy3.jpg',
  ],
  'volleyballs': [
    '/vallybal.jpg',
  ],
  'handballs': [
    '/1058721.jpg',
    '/100216558_FR_eCom.webp',
  ],
  'futsal': [
    '/0026148_wilson-bela-team-v2-padel-2.jpeg',
  ],
  'sports-wear': [
    '/Aqua_Black_Lines_Sublimation_Soccer_Uniform_Jersey_Custom_Team_Soccer_Jersey_Shirt_3_zmoogs-600x600-1.jpg',
    '/WhatsApp-Image-2025-04-16-at-17.42.22_7a645811.jpg',
    '/WhatsApp-Image-2025-04-16-at-17.42.22_903303ce.jpg',
  ],
  'goalkeeper-gloves': [
    '/Sports-Accessories-600x420.webp',
  ],
  'general': [
    '/sports-products-500x500.webp',
    '/sports.jpg',
    '/tuv-rheinland-recreation-and-sports-equipment.jpg',
    '/Blog-Body-03-9-1024x640.jpg',
  ],
}

export const getProductsByCategory = (category: string) => {
  const images = productImages[category as keyof typeof productImages] || productImages.general
  
  return images.map((image, index) => ({
    id: index + 1,
    image,
    name: getProductName(category, index),
    type: getProductType(category, index),
    size: getProductSize(category, index),
  }))
}

const getProductName = (category: string, index: number): string => {
  const names: Record<string, string[]> = {
    'soccer-balls': [
      'Premium Soccer Ball',
      'Professional Soccer Ball',
      'Training Soccer Ball',
      'Match Soccer Ball',
      'Indoor Soccer Ball',
      'Recreational Soccer Ball',
      'Classic Soccer Ball',
      'Elite Soccer Ball',
      'Championship Soccer Ball',
      'Tournament Soccer Ball',
      'Practice Soccer Ball',
      'Competition Soccer Ball',
      'Standard Soccer Ball',
      'Premium Match Ball',
    ],
    'rugby-balls': [
      'Professional Rugby Ball',
      'Training Rugby Ball',
      'Match Rugby Ball',
    ],
    'volleyballs': [
      'Professional Volleyball',
    ],
    'handballs': [
      'Professional Handball',
      'Training Handball',
    ],
    'futsal': [
      'Futsal Ball',
    ],
    'sports-wear': [
      'Custom Soccer Jersey',
      'Team Soccer Uniform',
      'Professional Sports Jersey',
    ],
    'goalkeeper-gloves': [
      'Professional Goalkeeper Gloves',
    ],
  }
  
  const categoryNames = names[category] || ['Sports Product']
  return categoryNames[index % categoryNames.length] || 'Sports Product'
}

const getProductType = (category: string, index: number): string => {
  const types: Record<string, string[]> = {
    'soccer-balls': ['Hand Stitched', 'Machine Stitched', 'Hybrid', 'Thermo Bonded', 'Hand Stitched', 'Machine Stitched', 'Hybrid', 'Thermo Bonded', 'Hand Stitched', 'Machine Stitched', 'Hybrid', 'Thermo Bonded', 'Hand Stitched', 'Machine Stitched'],
    'rugby-balls': ['Machine Stitched', 'Hand Stitched', 'Machine Stitched'],
    'volleyballs': ['Machine Stitched'],
    'handballs': ['Machine Stitched', 'Hand Stitched'],
    'futsal': ['Machine Stitched'],
    'sports-wear': ['100% Polyester', 'Dri-Fit', 'Sublimated'],
    'goalkeeper-gloves': ['Professional Grade'],
  }
  
  const categoryTypes = types[category] || ['High Quality']
  return categoryTypes[index % categoryTypes.length] || 'High Quality'
}

const getProductSize = (category: string, index: number): string => {
  const sizes: Record<string, string[]> = {
    'soccer-balls': ['Size 5', 'Size 5', 'Size 5', 'Size 5', 'Size 5', 'Size 4', 'Size 5', 'Size 5', 'Size 5', 'Size 5', 'Size 5', 'Size 5', 'Size 5', 'Size 5'],
    'rugby-balls': ['Size 5', 'Size 5', 'Size 5'],
    'volleyballs': ['Official Size'],
    'handballs': ['Size 3', 'Size 2'],
    'futsal': ['Size 4'],
    'sports-wear': ['S, M, L, XL', 'S, M, L, XL', 'S, M, L, XL'],
    'goalkeeper-gloves': ['All Sizes'],
  }
  
  const categorySizes = sizes[category] || ['Standard']
  return categorySizes[index % categorySizes.length] || 'Standard'
}

