import React from "react";
import "./home.css";
import heroImg from "../assets/hero1.png";

const home = () => {
  return (
    <div id="home" className="w-screen h-screen home-bg flex justify-center items-center">
      <div id="hero1" className="flex justify-center mt-10 flex-col relative">
        <svg
          className="absolute left-[50%] transform translate-x-[-50%] top-16 z-[-10]"
          width="1014"
          height="167"
          viewBox="0 0 1014 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M198.719 14.1596C193.727 8.78649 186.04 5.36052 174.894 5.73023C164.909 6.12459 100.75 5.73023 82.708 5.73023C74.651 5.73023 66.9894 6.49429 58.9324 14.5293C52.7784 20.2721 46.6245 30.205 40.4952 48.5919C27.4211 86.8199 5.52385 151.297 5.52385 151.297C4.58469 155.29 6.71015 159.382 10.5162 160.934C16.6702 162.832 20.501 156.72 20.8964 155.561C24.7272 145.209 30.8812 127.217 36.615 110.358C45.0922 85.834 52.383 63.6268 56.9799 50.2186C60.8107 39.8668 64.2708 31.8317 68.8677 26.853C72.1054 23.846 76.3563 22.17 80.805 22.1946C105.001 21.4306 154.554 21.4306 165.675 22.1946C169.902 22.589 182.21 21.8003 188.71 27.1734C191.922 30.624 192.54 35.9725 189.871 44.4019C188.487 49.1341 185.991 53.4721 182.58 57.0459C177.761 61.4332 171.409 63.7253 164.885 63.4789C136.883 64.3169 120.349 62.419 112.366 71.6125C108.658 75.0631 106.212 79.6475 105.446 84.6263C104.21 92.2423 105.866 100.006 110.043 106.488C118.866 124.875 119.261 121.794 137.303 156.276C138.069 157.41 142.295 162.389 147.683 160.096C151.464 158.642 153.367 154.427 151.934 150.632C151.81 150.336 151.687 150.04 151.514 149.744C145.78 135.178 122.499 100.721 120.793 92.2916C120.225 88.5452 121.041 84.7249 123.117 81.5454C128.455 77.725 140.392 79.6475 165.329 79.2532C175.487 79.056 185.126 74.8166 192.12 67.4964C207.888 52.9298 212.485 26.9023 198.571 14.2582L198.67 14.135L198.719 14.1596Z"
            fill="white"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M556.066 52.3587C549.17 45.5561 539.976 41.5879 530.288 41.2428C524.9 41.2428 448.087 41.2428 440.821 40.8484C430.935 41.1442 421.568 45.2603 414.673 52.3587C407.159 59.6297 402.76 69.5133 402.389 79.9391C401.623 89.5762 404.713 96.0091 409.31 99.8294C418.133 110.181 435.804 108.259 435.804 108.259H522.379C526.705 108.111 530.115 104.537 530.041 100.224C529.942 96.2556 526.729 93.0514 522.75 92.9528H436.249C430.861 92.9528 424.707 92.9528 420.876 89.7487C418.578 87.0868 417.811 82.4777 419.319 75.6011C420.357 70.5731 422.581 65.8408 425.77 61.8233C430.589 57.7318 436.718 55.5382 443.045 55.6861H526.012C534.836 55.6861 540.99 57.584 544.45 60.6649C547.341 64.3373 548.206 69.2421 546.748 73.6786C542.596 90.3402 537.505 106.755 531.499 122.825C529.176 129.727 527.668 134.73 524.579 138.156L523.838 138.92C516.522 143.899 497.319 144.293 497.319 144.293L246.909 144.638C239.445 145.033 232.08 143.011 225.852 138.895C223.331 136.209 222.071 132.586 222.367 128.938C224.691 118.98 241.2 74.9357 241.2 74.9357C243.202 70.1541 245.797 65.6683 248.911 61.5275C248.911 61.1332 249.306 61.1332 249.652 60.7635C254.002 57.7318 259.242 56.253 264.555 56.5734C264.555 56.5734 343.692 56.1791 353.281 56.1791C359.411 56.1791 364.007 56.9431 366.726 59.2353C369.025 62.686 369.395 68.0344 366.331 76.4638C365.268 80.0376 363.414 83.3157 360.943 86.1009C354.591 91.2522 346.559 93.8401 338.378 93.3965H247.675C243.647 93.5197 240.335 96.6499 240.014 100.667C239.618 108.702 248.071 108.702 248.071 108.702L344.483 108.308C354.789 108.136 364.601 103.872 371.743 96.4528C378.391 89.9952 382.642 81.4425 383.804 72.2491C385.732 59.9994 382.247 52.7284 377.353 48.144C369.272 38.9506 354.319 40.4541 354.319 40.4541H257.611C252.173 41.1689 246.983 43.2639 242.633 46.5913C241.274 47.6511 239.989 48.7849 238.803 50.0419C230.35 57.6826 225.902 71.8794 225.902 71.8794L207.86 125.537C207.86 125.537 202.867 137.392 215.151 149.247C216.386 150.701 217.795 152.008 219.377 153.117C232.056 163.05 257.808 161.152 257.808 161.152H508.613C508.613 161.152 528.608 160.758 537.826 150.406C540.347 148.286 542.201 145.501 543.165 142.371C555.472 104.438 553.94 107.889 562.763 80.3334C566.989 67.6647 563.159 58.4713 556.609 52.3587H556.115H556.066Z"
            fill="white"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M834.601 56.6434C836.9 56.6434 843.424 55.8794 843.424 48.9535C843.424 42.0276 836.504 41.3128 833.761 41.3128C819.946 40.9185 791.128 38.2566 776.892 53.5625C774.075 56.3723 771.752 59.6258 769.997 63.1996C768.069 67.4143 758.455 97.3115 749.632 124.276C746.963 132.705 745.406 137.141 742.341 141.11C741.946 141.504 741.575 141.874 741.18 141.874C735.026 146.458 720.444 146.853 720.444 146.853H603.741C596.722 147.173 589.827 144.881 584.389 140.42C581.695 137.856 580.386 134.159 580.929 130.487C583.252 120.529 599.762 76.4599 599.762 76.4599C601.739 71.6783 604.334 67.1925 607.423 63.0517C607.819 62.6574 607.819 62.3123 608.19 61.918C611.526 59.1575 615.802 57.7772 620.127 58.0483C620.127 58.0483 707.666 57.7033 717.651 57.7033C720.147 57.6293 722.619 58.4427 724.571 59.9955C727.241 63.4461 728.031 69.6326 725.708 76.4599C724.448 80.502 722.421 84.273 719.703 87.5265C714.883 91.6426 708.754 93.9101 702.427 93.9594H606.558C606.558 93.9594 599.243 94.6989 598.847 101.23C598.452 108.871 606.904 109.265 606.904 109.265L706.406 108.871C715.674 107.934 724.3 103.794 730.799 97.1636C734.803 93.3186 737.818 88.611 739.623 83.3857C746.073 64.6045 741.946 54.647 735.792 49.2739C731.59 44.7881 725.832 42.0522 719.678 41.6332H615.95C610.439 42.0522 605.199 44.1966 600.998 47.7704C599.836 48.5345 599.07 49.6683 597.785 50.4323C589.728 57.7033 583.598 72.9353 583.598 72.9353L565.656 124.818C565.656 124.818 560.317 137.462 572.971 149.687L576.431 153.162C587.973 162.799 614.863 161.197 614.863 161.197H725.09C725.09 161.197 744.664 160.433 753.883 150.081C756.305 148.11 758.06 145.448 758.875 142.441C771.925 102.216 771.925 103.375 781.91 73.8719C783.071 70.6431 784.826 67.6361 787.075 65.0235C800.124 54.2773 822.788 57.3829 834.725 56.5941H834.552L834.601 56.6434Z"
            fill="white"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M1001.67 52.3247L1000.12 50.7719C989.341 40.8144 972.856 41.5785 972.856 41.5785H900.665C900.665 41.5785 892.954 42.3426 892.954 49.2191C892.954 56.0957 900.665 56.9091 900.665 56.9091H972.09C972.09 56.9091 983.978 57.3035 990.132 62.2822C994.729 68.0004 990.527 76.4298 990.527 76.4298L974.018 122.397C972.14 129.249 969.149 135.78 965.195 141.696L964.799 142.09C960.969 144.407 956.569 145.615 952.096 145.565L867.621 145.96C865.174 146.108 862.727 145.442 860.701 144.062C858.798 141.351 858.032 136.766 861.096 128.337C862.9 123.703 865.496 119.415 868.807 115.693C873.132 111.478 878.866 109.013 884.921 108.792H964.824C969.075 108.668 972.535 105.366 972.881 101.151C973.277 93.5103 964.824 93.5103 964.824 93.5103H883.364C874.22 93.7075 865.594 97.725 859.589 104.602C853.113 111.133 848.368 119.168 845.773 127.967C840.781 143.692 844.612 151.333 849.233 155.548C851.927 158.579 855.585 160.625 859.613 161.29H955.63C963.144 161.463 970.36 158.234 975.204 152.491C976.687 151.259 977.972 149.854 979.085 148.277C982.841 142.386 985.93 136.076 988.303 129.495L1007.88 74.3347C1007.11 74.3347 1012.87 62.8245 1001.75 52.1275V52.3494L1001.67 52.3247Z"
            fill="white"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <img
          src={heroImg}
          alt="koenigsegg regera"
          className="max-h-115 contain-content mt-30"
        />
        <svg
          className="absolute left-[50%] transform translate-x-[-50%] top-16 z-10"
          width="1014"
          height="167"
          viewBox="0 0 1014 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M198.719 14.1596C193.727 8.78649 186.04 5.36052 174.894 5.73023C164.909 6.12459 100.75 5.73023 82.708 5.73023C74.651 5.73023 66.9894 6.49429 58.9324 14.5293C52.7784 20.2721 46.6245 30.205 40.4952 48.5919C27.4211 86.8199 5.52385 151.297 5.52385 151.297C4.58469 155.29 6.71015 159.382 10.5162 160.934C16.6702 162.832 20.501 156.72 20.8964 155.561C24.7272 145.209 30.8812 127.217 36.615 110.358C45.0922 85.834 52.383 63.6268 56.9799 50.2186C60.8107 39.8668 64.2708 31.8317 68.8677 26.853C72.1054 23.846 76.3563 22.17 80.805 22.1946C105.001 21.4306 154.554 21.4306 165.675 22.1946C169.902 22.589 182.21 21.8003 188.71 27.1734C191.922 30.624 192.54 35.9725 189.871 44.4019C188.487 49.1341 185.991 53.4721 182.58 57.0459C177.761 61.4332 171.409 63.7253 164.885 63.4789C136.883 64.3169 120.349 62.419 112.366 71.6125C108.658 75.0631 106.212 79.6475 105.446 84.6263C104.21 92.2423 105.866 100.006 110.043 106.488C118.866 124.875 119.261 121.794 137.303 156.276C138.069 157.41 142.295 162.389 147.683 160.096C151.464 158.642 153.367 154.427 151.934 150.632C151.81 150.336 151.687 150.04 151.514 149.744C145.78 135.178 122.499 100.721 120.793 92.2916C120.225 88.5452 121.041 84.7249 123.117 81.5454C128.455 77.725 140.392 79.6475 165.329 79.2532C175.487 79.056 185.126 74.8166 192.12 67.4964C207.888 52.9298 212.485 26.9023 198.571 14.2582L198.67 14.135L198.719 14.1596Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M556.066 52.3587C549.17 45.5561 539.976 41.5879 530.288 41.2428C524.9 41.2428 448.087 41.2428 440.821 40.8484C430.935 41.1442 421.568 45.2603 414.673 52.3587C407.159 59.6297 402.76 69.5133 402.389 79.9391C401.623 89.5762 404.713 96.0091 409.31 99.8294C418.133 110.181 435.804 108.259 435.804 108.259H522.379C526.705 108.111 530.115 104.537 530.041 100.224C529.942 96.2556 526.729 93.0514 522.75 92.9528H436.249C430.861 92.9528 424.707 92.9528 420.876 89.7487C418.578 87.0868 417.811 82.4777 419.319 75.6011C420.357 70.5731 422.581 65.8408 425.77 61.8233C430.589 57.7318 436.718 55.5382 443.045 55.6861H526.012C534.836 55.6861 540.99 57.584 544.45 60.6649C547.341 64.3373 548.206 69.2421 546.748 73.6786C542.596 90.3402 537.505 106.755 531.499 122.825C529.176 129.727 527.668 134.73 524.579 138.156L523.838 138.92C516.522 143.899 497.319 144.293 497.319 144.293L246.909 144.638C239.445 145.033 232.08 143.011 225.852 138.895C223.331 136.209 222.071 132.586 222.367 128.938C224.691 118.98 241.2 74.9357 241.2 74.9357C243.202 70.1541 245.797 65.6683 248.911 61.5275C248.911 61.1332 249.306 61.1332 249.652 60.7635C254.002 57.7318 259.242 56.253 264.555 56.5734C264.555 56.5734 343.692 56.1791 353.281 56.1791C359.411 56.1791 364.007 56.9431 366.726 59.2353C369.025 62.686 369.395 68.0344 366.331 76.4638C365.268 80.0376 363.414 83.3157 360.943 86.1009C354.591 91.2522 346.559 93.8401 338.378 93.3965H247.675C243.647 93.5197 240.335 96.6499 240.014 100.667C239.618 108.702 248.071 108.702 248.071 108.702L344.483 108.308C354.789 108.136 364.601 103.872 371.743 96.4528C378.391 89.9952 382.642 81.4425 383.804 72.2491C385.732 59.9994 382.247 52.7284 377.353 48.144C369.272 38.9506 354.319 40.4541 354.319 40.4541H257.611C252.173 41.1689 246.983 43.2639 242.633 46.5913C241.274 47.6511 239.989 48.7849 238.803 50.0419C230.35 57.6826 225.902 71.8794 225.902 71.8794L207.86 125.537C207.86 125.537 202.867 137.392 215.151 149.247C216.386 150.701 217.795 152.008 219.377 153.117C232.056 163.05 257.808 161.152 257.808 161.152H508.613C508.613 161.152 528.608 160.758 537.826 150.406C540.347 148.286 542.201 145.501 543.165 142.371C555.472 104.438 553.94 107.889 562.763 80.3334C566.989 67.6647 563.159 58.4713 556.609 52.3587H556.115H556.066Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M834.601 56.6434C836.9 56.6434 843.424 55.8794 843.424 48.9535C843.424 42.0276 836.504 41.3128 833.761 41.3128C819.946 40.9185 791.128 38.2566 776.892 53.5625C774.075 56.3723 771.752 59.6258 769.997 63.1996C768.069 67.4143 758.455 97.3115 749.632 124.276C746.963 132.705 745.406 137.141 742.341 141.11C741.946 141.504 741.575 141.874 741.18 141.874C735.026 146.458 720.444 146.853 720.444 146.853H603.741C596.722 147.173 589.827 144.881 584.389 140.42C581.695 137.856 580.386 134.159 580.929 130.487C583.252 120.529 599.762 76.4599 599.762 76.4599C601.739 71.6783 604.334 67.1925 607.423 63.0517C607.819 62.6574 607.819 62.3123 608.19 61.918C611.526 59.1575 615.802 57.7772 620.127 58.0483C620.127 58.0483 707.666 57.7033 717.651 57.7033C720.147 57.6293 722.619 58.4427 724.571 59.9955C727.241 63.4461 728.031 69.6326 725.708 76.4599C724.448 80.502 722.421 84.273 719.703 87.5265C714.883 91.6426 708.754 93.9101 702.427 93.9594H606.558C606.558 93.9594 599.243 94.6989 598.847 101.23C598.452 108.871 606.904 109.265 606.904 109.265L706.406 108.871C715.674 107.934 724.3 103.794 730.799 97.1636C734.803 93.3186 737.818 88.611 739.623 83.3857C746.073 64.6045 741.946 54.647 735.792 49.2739C731.59 44.7881 725.832 42.0522 719.678 41.6332H615.95C610.439 42.0522 605.199 44.1966 600.998 47.7704C599.836 48.5345 599.07 49.6683 597.785 50.4323C589.728 57.7033 583.598 72.9353 583.598 72.9353L565.656 124.818C565.656 124.818 560.317 137.462 572.971 149.687L576.431 153.162C587.973 162.799 614.863 161.197 614.863 161.197H725.09C725.09 161.197 744.664 160.433 753.883 150.081C756.305 148.11 758.06 145.448 758.875 142.441C771.925 102.216 771.925 103.375 781.91 73.8719C783.071 70.6431 784.826 67.6361 787.075 65.0235C800.124 54.2773 822.788 57.3829 834.725 56.5941H834.552L834.601 56.6434Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M1001.67 52.3247L1000.12 50.7719C989.341 40.8144 972.856 41.5785 972.856 41.5785H900.665C900.665 41.5785 892.954 42.3426 892.954 49.2192C892.954 56.0958 900.665 56.9091 900.665 56.9091H972.09C972.09 56.9091 983.978 57.3035 990.132 62.2822C994.729 68.0004 990.527 76.4298 990.527 76.4298L974.018 122.397C972.14 129.249 969.149 135.78 965.195 141.696L964.799 142.09C960.969 144.407 956.569 145.615 952.096 145.565L867.621 145.96C865.174 146.108 862.727 145.442 860.701 144.062C858.798 141.351 858.032 136.766 861.096 128.337C862.9 123.703 865.496 119.415 868.807 115.693C873.132 111.478 878.866 109.013 884.921 108.792H964.824C969.075 108.668 972.535 105.366 972.881 101.151C973.277 93.5104 964.824 93.5103 964.824 93.5103H883.364C874.22 93.7075 865.594 97.725 859.589 104.602C853.113 111.133 848.368 119.168 845.773 127.967C840.781 143.692 844.612 151.333 849.233 155.548C851.927 158.579 855.585 160.625 859.613 161.29H955.63C963.144 161.463 970.36 158.234 975.204 152.491C976.687 151.259 977.972 149.854 979.085 148.277C982.841 142.386 985.93 136.076 988.303 129.495L1007.88 74.3348C1007.11 74.3348 1012.87 62.8245 1001.75 52.1275V52.3494L1001.67 52.3247Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default home;
