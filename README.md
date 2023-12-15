# Bookmarker

Bookmarker is a web application designed to help users save their favorite websites for easy access. Users can add bookmarks by entering the website name and URL, with the app providing validation for both. Saved bookmarks are displayed in a table, offering options to visit the sites or delete them.

**Live Demo:** [Bookmarker Demo](https://mohamedali09.github.io/Bookmarker/)


## Table of Contents

- [Overall Functionality](#overall-functionality)
  - [Adding Bookmarks](#adding-bookmarks)
  - [Bookmark Table](#bookmark-table)
  - [Error Handling](#error-handling)
- [UI Elements](#ui-elements)
  - [Header](#header)
  - [Book Marking Section](#book-marking-section)
  - [Bookmark Table](#bookmark-table-1)
  - [Error Card](#error-card)
- [JavaScript Code](#javascript-code)
- [Additional Notes](#additional-notes)

## Overall Functionality

### Adding Bookmarks

- Users enter the website name and URL.
- Validation checks ensure a minimum of 3 characters for the name and a valid URL format.
- Green checkmarks indicate valid entries, while red exclamation marks signify validation errors.
- Submitted bookmarks are saved for future access.

### Bookmark Table

- Displays a list of saved bookmarks with columns for index, website name, visit button, and delete button.
- Visit button opens the associated website in a new tab.
- Delete button removes the bookmark from the list.

### Error Handling

- An error card is displayed when bookmark information is invalid.
- Provides an explanation of validation rules.
- Includes a closing button to dismiss the error.

## UI Elements

### Header

Displays the app name "Bookmarker" and decorative SVG icons.

### Book Marking Section

- **Title:** "Bookmark your favorite sites" with decorative SVG icons.
- **Site Name field:** Users enter the desired bookmark name.
  - Validation checks for at least 3 characters and no spaces.
- **Site URL field:** Users enter the website URL.
  - Validation checks for a valid URL format.
- **Submit button:** Saves the entered bookmark.

### Bookmark Table

Displays saved bookmarks with columns for index, website name, visit button, and delete button.

### Error Card

Displays when bookmark information is invalid.
Includes a closing button and an explanation of validation rules.

## JavaScript Code

- Validates website name and URL using regular expressions.
- Saves and retrieves bookmark data from local storage.
- Updates the bookmark table with added or deleted entries.
- Handles button clicks for adding, visiting, and deleting bookmarks.
- Shows and hides the error card based on validation results.

## Additional Notes

- Utilizes Bootstrap for responsive layout and styling.
- Code is well-structured and documented for easy understanding.
- Consider further customization, such as adding user accounts, search functionality, or different theme options.
