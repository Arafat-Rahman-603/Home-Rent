export const dummyProperties = Array.from({ length: 32 }, (_, i) => {
    const houseNames = [
      "Greenwood Villa","Rosewood Residence","Lakeside Cottage","Maple Leaf House",
      "Sunnydale Home","Palm Grove Villa","Silver Oak Residence","Blue Horizon Villa",
      "Garden View House","Hilltop Haven","Golden Nest Villa","Ocean Breeze Home",
      "Riverfront Cottage","Willow Creek House","Sunset Villa","Moonlight Residence",
      "Crystal Lake House","Royal Garden Villa","Heritage Home","Emerald Hills Residence",
      "Pinewood Cottage","Skyline View House","Mountain Ridge Villa","Lotus Blossom Residence",
      "Cedarwood House","Harmony Villa","Meadowbrook Cottage","Orchid Garden Home",
      "Serenity Villa","Magnolia House","Starlight Residence","Amberwood Villa"
    ];
    const houseImages = [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
        "https://images.unsplash.com/photo-1580584126903-c17d41830450",
        "https://images.unsplash.com/photo-1628605248798-3d2e0a81d7d0",
        "https://images.unsplash.com/photo-1580584126905-6e11fcd29c5c",
        "https://images.unsplash.com/photo-1565182999561-18d7dc61ee09",
        "https://images.unsplash.com/photo-1600585154340-0a0d1fb87ec1",
        "https://images.unsplash.com/photo-1600607688901-9a7a7a5f7f4a",
        "https://images.unsplash.com/photo-1599423300746-fd5fdfcfb1a3",
        "https://images.unsplash.com/photo-1599423300746-b25cb4f3f2a6",
        "https://images.unsplash.com/photo-1600607688497-9f5a7a7f4a3f",
        "https://images.unsplash.com/photo-1600585154411-26f3b2e1b1a6",
        "https://images.unsplash.com/photo-1599423300746-d6d07f1f6d1a",
        "https://images.unsplash.com/photo-1600607688971-2c5a5f3f2a3c",
        "https://images.unsplash.com/photo-1600585154340-889dced4db0d",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
      ];
  
    return {
      id: (i + 1).toString(),
      title: houseNames[Math.round(Math.random()*11)],
      description: `This is a modern ${2 + (i % 4)} bedroom house with great facilities.`,
      location: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"][i % 5],
      price: 5000 + i * 1500,
      bedrooms: (i % 4) + 1,
      available_from: "2025-10-01",
      contactPhone: "017XXXXXXXX",
      contactEmail: `owner${i + 1}@example.com`,
      image: houseImages[Math.round(Math.random()*11)]
    };
  });
  