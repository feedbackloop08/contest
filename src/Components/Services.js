import React, { Component } from "react";
import Card from "../Components/Card";

class Services extends Component {
  render() {
    const cardItems = [
      {
        title: "Free HubSpot CRM",
        subTitle:
          "Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever.",
        features: ["Contact Insights", "Deals", "Tasks"],
        action: "Get Free CRM",
      },
      {
        title: "CMS Hub",
        subTitle:
          "Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.",
        features: ["Drag-and-Drop Editor", "SEO Recommendations", "Website Themes"],
        action: "Get Started",
      },
      {
        title: "Marketing Hub",
        subTitle:
          "Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.",
        features: ["Lead Generation", "Market Automation", "Analytics"],
        action: "Get Started",
      },
      {
        title: "Sales Hub",
        subTitle:
          "Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.",
        features: ["Email Tracking", "Meeting Scheduling", "Email Automation"],
        action: "Get Started",
      },
      {
        title: "Service hub",
        subTitle:
          "Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business.",
        features: ["Tickets", "Customer Feedback", "Knowledge Base"],
        action: "Get Started",
      },
    ];
    return (
      <div className="services">
        <div className="tag">
          <h2>Powerful Alone. Better Together.</h2>
          <p>
            HubSpot offers a full stack of software for marketing, sales, and customer service, with
            a completely free CRM at its core. They’re powerful alone — but even better when used
            together.
          </p>
        </div>

        {cardItems.map((item, index) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            content={item.features}
            action={item.action}
          />
        ))}
        <Card />
      </div>
    );
  }
}

export default Services;
