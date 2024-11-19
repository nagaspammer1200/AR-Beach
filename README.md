# AR Beach

Welcome to my project repository dedicated to augmented reality (AR) applications. This initiative aims to explore and implement innovative AR solutions with a focus on practical and engaging use cases.

## Table of Contents

| Section                                | Link                                               |
|----------------------------------------|----------------------------------------------------|
| [Implemented Projects](#implemented-projects) | [View Details](#implemented-projects)             | [View Details](#augmented-reality-for-public-transport) |
| [Future Applications](#future-applications) | [View Details](#future-applications)              |
| [Contribution](#contribution)           | [View Details](#contribution)                     |


<details>
<summary>Preview</summary>

### Images
![2](https://github.com/user-attachments/assets/7bc62fb5-6087-41b6-9b9c-3c9a5891749a)  <br/><br/>
![1](https://github.com/user-attachments/assets/11274560-640b-4b6f-bd7f-3815a8e5073a)<br/><br/>

### Videos
https://github.com/user-attachments/assets/811756b7-bb60-45f6-8443-9a1bda721e0e

</details>

<details>
<summary>Implemented Projects</summary>

### Augmented Reality for Bus Stops
This project focuses on integrating AR technology at bus stops to provide passengers with real-time updates, route information, and interactive maps. The goal is to enhance the user experience and streamline public transit information.

#### Usage

To get started with this project, follow these steps:

1. **Set Up the AR Environment**: Begin by remixing my Glitch project at [Glitch](https://glitch.com/edit/#!/horn-zenith-tilapia). For this setup, only three languages were used, which necessitated adjusting the `<a-image>` position values in the code. Modify these values according to your specific requirements. Delete one of the `<a-image>` tags if you are using fewer languages than three.
   ![glitch](https://github.com/user-attachments/assets/82c0f44f-0ab6-4bad-9e96-d67af2240155)

2. **Vary the Design and Details**: Customize the Canva designs according to your language and region. If you do not require a third language, create and download edited images from two of the Canva designs. Here are the Canva links for the designs:
   - For the English Bus Stop: [Canva Design](https://www.canva.com/design/DAGMWFtyJ7E/17rvW8JsllBUhWMqEOKJPQ/edit?utm_content=DAGMWFtyJ7E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
   - For the Malayalam Bus Stop: [Canva Design](https://www.canva.com/design/DAGMWC1bUxc/dx4b6cxk3Zb2H9wc1BRA5Q/edit?utm_content=DAGMWC1bUxc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
   - For the Hindi Bus Stop: [Canva Design](https://www.canva.com/design/DAGMWG69ZmQ/7MUeZgkcdbm3erfTM7KDwQ/edit?utm_content=DAGMWG69ZmQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
   ![canva](https://github.com/user-attachments/assets/fccf328e-1623-4db6-995a-2144415234cd)

   After modifying these images, download the edited informative images and upload them to the Glitch assets. Copy the URL attribute of the `<a-image>` tags from the Glitch assets and update your project accordingly.

3. **Generate a QR Code**: Use a QR code generator to convert the Glitch URL into a QR code. I personally recommend using [The QR Code Generator](https://the-qrcode-generator.com/). This will produce a QR code that you can use for testing.
   ![qrcode](https://github.com/user-attachments/assets/b6c835a8-db70-43db-a2dc-f1cfe2b09406)

4. **Create a Pattern Marker**: Transform the generated QR code into a pattern marker by visiting [AR.js Marker Training](https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html). Upload the QR code from the previous step to create a pattern marker. Ensure that the pattern ratio of the resulting file matches that of the QR code. Download both the `.patt` and `.png` files for use with your project. Upload the `.patt` file to Glitch assets and copy the URL attribute of the `.patt` image in the Glitch assets to the `<a-marker>` tag in the `index.html`.
   ![marker](https://github.com/user-attachments/assets/436c65e9-7ba1-42d9-a4be-e678196f51be)

5. **Test Your Project**: Before testing, verify that the pattern ratio of the pattern marker matches the QR code. Ensure that the canvas design has been updated to show major stops of a specific bus route to help users of various ethnic backgrounds better understand their surroundings. Print out the Pattern Marker image file (not the `.patt` file) and scan the printed image to test the project.

6. **Contribute to the Project**: Add it to a common database accessible by open-source volunteers, allowing modifications with proper authentication. This ensures that updates to routes can be managed collaboratively.

**Note**: AR technologies generally perform better on modern devices.

</details>

## Future Applications

In addition to our current projects, we plan to develop several other AR applications, including:

- **Contact Information**: An AR solution to streamline access to contact information in various contexts.
- **Image Tracking for Institutions**: Implementing AR image tracking systems within educational institutions or workplaces to assist new hires and improve onboarding processes.

## Contribution

We welcome contributions from the community. If you are interested in collaborating or have ideas to enhance these projects, please feel free to get in touch or submit a pull request.

Thank you for your interest and support!

## Conclusion

This repository showcases ongoing efforts to advance augmented reality applications in various real-world contexts. By following the outlined steps, you can contribute to enhancing public transit experiences and exploring new AR possibilities. For any questions or contributions, please reach out or submit a pull request. Your involvement helps drive innovation and improve user experiences in AR technologies.

---

For further details, please refer to the documentation or contact us directly through the provided channels.

