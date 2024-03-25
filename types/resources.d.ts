interface Resources {
  mobile: {
    HeaderTitle: string;
    HeaderSubtitle: string;
  };
  common: {
    ButtonTitle: string;
    ButtonTitlePrimary: string;
    MoreDetails: string;
    LessDetails: string;
    DetailsDes: string;
    Options: string;
    Fees: string;
    From: string;
    Commissioning: string;
    Provision: string;
    Installation: string;
    "dh TTC": string;
  };
  ftth: {
    Header: {
      Title: string;
      Subtitle: string;
    };
    Eligibility: {
      Title: string;
      Subtitle: string;
      SearchTitle: string;
      SearchLabel: string;
      SearchButtonTitle: string;
      SearchOU: string;
      NoSearchResult: string;
    };
    card: {
      productName: "Business Connect Fibre";
      subTitle: "20 Méga";
      options: {
        title: "Adresse IP fixe";
        value: "+20 dh TTC/mois";
      };
      attributes: [
        {
          title: string;
          description: string;
          value: string;
        },
        {
          title: string;
          description: string;
          value: string;
        },
        {
          title: string;
          description: string;
          value: string;
        },
        {
          title: string;
          description: string;
          value: string;
        },
        {
          title: string;
          description: string;
          value: string;
        },
        {
          title: string;
          description: string;
          value: string;
        }
      ];
    };
  };
}

export default Resources;
